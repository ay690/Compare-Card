import { Star, StarHalf, User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/data/reviews";

const Reviews = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={i}
          className="h-4 w-4 text-yellow-500 fill-yellow-500 stroke-yellow-500"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf
          key="half"
          className="h-4 w-4 text-yellow-500 fill-yellow-500 stroke-yellow-500"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="h-4 w-4 text-yellow-500 stroke-yellow-500 fill-transparent"
        />
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-banking-grey">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-banking-text mb-4">
            User Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our users are saying about their experience with CardMitra
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reviews.map((review) => (
            <Card key={review.id} className="banking-card">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
                      }}
                    >
                      <User className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-banking-text mb-2">
                  {review.title}
                </h3>
                <p className="text-gray-600 mb-3">{review.content}</p>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500">Recommended Card:</p>
                  <p className="font-medium text-primary">
                    {review.cardRecommended}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="banking-card max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-banking-text mb-4">
              Share Your Experience
            </h2>
            <p className="text-gray-600 mb-6">
              Help others by sharing your CardMitra experience and the credit
              card you found
            </p>
            <button
              className="text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 cursor-pointer hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1B4F72 0%, #2E86AB 100%)",
              }}
            >
              Write a Review
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Reviews;
