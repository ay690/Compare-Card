import { type CreditCard } from "@/store/slices/creditCardSlice";

interface AIResponse {
  content: string;
  cardRecommendations?: string[];
}

export class AIService {
  private apiKey: string = import.meta.env.VITE_GROQ_API_KEY;
  private apiUrl: string = "https://api.groq.com/openai/v1/chat/completions";

  setApiKey(key: string) {
    this.apiKey = key;
  }

  async generateCardSummary(card: CreditCard): Promise<string> {
    if (!this.apiKey) {
      return `${
        card.name
      } is a ${card.category.toLowerCase()} credit card from ${
        card.bank
      } with ${
        card.cashbackRate
      }% cashback rate and annual fee of ₹${card.annualFee.toLocaleString()}.`;
    }

    try {
      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                "You are a credit card expert. Generate a concise, helpful summary of credit cards in 2-3 sentences. Focus on key benefits and ideal user profile.",
            },
            {
              role: "user",
              content: `Summarize this credit card: ${card.name} by ${
                card.bank
              }. Category: ${card.category}. Annual Fee: ₹${
                card.annualFee
              }. Cashback: ${
                card.cashbackRate
              }%. Benefits: ${card.benefits.join(", ")}. Min Salary: ₹${
                card.eligibility.minSalary
              }. Lounge Access: ${card.loungeAccess ? "Yes" : "No"}.`,
            },
          ],
          temperature: 0.7,
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      return (
        data.choices?.[0]?.message?.content || this.getFallbackSummary(card)
      );
    } catch (error) {
      console.error("AI API Error:", error);
      return this.getFallbackSummary(card);
    }
  }

  async generateChatResponse(
    message: string,
    cards: CreditCard[]
  ): Promise<AIResponse> {
    if (!this.apiKey) {
      return this.getFallbackResponse(message, cards);
    }

    try {
      const cardsContext = cards
        .map(
          (card) =>
            `${card.name} (${card.bank}): ${card.category} card, ₹${card.annualFee} annual fee, ${card.cashbackRate}% cashback, min salary ₹${card.eligibility.minSalary}`
        )
        .join("\n");

      const response = await fetch(this.apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content: `You are a helpful credit card advisor. Based on the available cards, provide personalized recommendations. Always mention specific card names when relevant. Keep responses concise and helpful.

Available cards:
${cardsContext}`,
            },
            {
              role: "user",
              content: message,
            },
          ],
          temperature: 0.7,
          max_tokens: 300,
        }),
      });

      const data = await response.json();
      const content =
        data.choices?.[0]?.message?.content ||
        this.getFallbackResponse(message, cards).content;

      // Extract card recommendations from the response
      const cardRecommendations = this.extractCardRecommendations(
        content,
        cards
      );

      return { content, cardRecommendations };
    } catch (error) {
      console.error("AI API Error:", error);
      return this.getFallbackResponse(message, cards);
    }
  }

  private getFallbackSummary(card: CreditCard): string {
    const features = [];
    if (card.loungeAccess) features.push("lounge access");
    if (card.fuelSurcharge) features.push("fuel surcharge waiver");
    if (card.annualFee === 0) features.push("no annual fee");

    return `${card.name} is a ${card.category.toLowerCase()} credit card from ${
      card.bank
    } offering ${card.cashbackRate}% cashback rate${
      features.length > 0 ? ` with ${features.join(", ")}` : ""
    }. Ideal for users with minimum salary of ₹${(
      card.eligibility.minSalary / 100000
    ).toFixed(1)}L.`;
  }

  private getFallbackResponse(
    message: string,
    cards: CreditCard[]
  ): AIResponse {
    const lowerMessage = message.toLowerCase();
    let recommendedCards: CreditCard[] = [];

    if (lowerMessage.includes("lounge") || lowerMessage.includes("airport")) {
      recommendedCards = cards.filter((card) => card.loungeAccess);
    } else if (
      lowerMessage.includes("cashback") ||
      lowerMessage.includes("reward")
    ) {
      recommendedCards = cards.filter((card) => card.cashbackRate >= 3);
    } else if (
      lowerMessage.includes("premium") ||
      lowerMessage.includes("luxury")
    ) {
      recommendedCards = cards.filter((card) => card.category === "Premium");
    } else if (
      lowerMessage.includes("first") ||
      lowerMessage.includes("beginner") ||
      lowerMessage.includes("starter")
    ) {
      recommendedCards = cards.filter(
        (card) => card.category === "Entry Level"
      );
    } else if (
      lowerMessage.includes("no fee") ||
      lowerMessage.includes("free")
    ) {
      recommendedCards = cards.filter((card) => card.annualFee === 0);
    } else {
      recommendedCards = cards.slice(0, 3);
    }

    const cardNames = recommendedCards.map((card) => card.name);
    let content = "";

    if (recommendedCards.length > 0) {
      content = `Based on your query, I recommend: ${cardNames.join(
        ", "
      )}. These cards match your requirements well.`;
    } else {
      content =
        "I understand your query. Let me help you find the best credit cards that match your needs from our available options.";
    }

    return { content, cardRecommendations: cardNames };
  }

  private extractCardRecommendations(
    content: string,
    cards: CreditCard[]
  ): string[] {
    const recommendations: string[] = [];
    cards.forEach((card) => {
      if (content.toLowerCase().includes(card.name.toLowerCase())) {
        recommendations.push(card.name);
      }
    });
    return recommendations;
  }
}

export const aiService = new AIService();
