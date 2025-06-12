/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "@/store/store";
import {
  setBank,
  setCategory,
  setMinSalary,
  setMaxAnnualFee,
  setLoungeAccess,
  setFuelSurcharge,
  setSortBy,
  setSortOrder,
  resetFilters,
} from "@/store/slices/filterSlice";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { RotateCcw } from "lucide-react";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const banks = [
    "HDFC Bank",
    "ICICI Bank",
    "State Bank of India",
    "Axis Bank",
    "American Express",
  ];

  const categories = ["Premium", "Cashback", "Entry Level"];

  const sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "annualFee", label: "Annual Fee" },
    { value: "cashbackRate", label: "Cashback Rate" },
    { value: "name", label: "Name" },
  ];

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-banking-text">
          Refine Your Search
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => dispatch(resetFilters())}
          className="text-sm text-gray-500 hover:text-banking-text border-1 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset all
        </Button>
      </div>

      <div className="space-y-6">
        {/* Bank Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-600">Bank</Label>
          <Select
            value={filters.bank}
            onValueChange={(value) => dispatch(setBank(value))}
          >
            <SelectTrigger className="h-10 bg-gray-50 border-gray-200 hover:border-banking-text cursor-pointer">
              <SelectValue
                placeholder="All Banks"
                className="text-banking-text"
              />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-100 shadow-lg">
              <SelectItem
                value="all"
                className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
              >
                All Banks
              </SelectItem>
              {banks.map((bank) => (
                <SelectItem
                  key={bank}
                  value={bank}
                  className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                >
                  {bank}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-600">Category</Label>
          <Select
            value={filters.category}
            onValueChange={(value) => dispatch(setCategory(value))}
          >
            <SelectTrigger className="h-10 bg-gray-50 border-gray-200 hover:border-banking-text cursor-pointer">
              <SelectValue
                placeholder="All Categories"
                className="text-banking-text"
              />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-100 shadow-lg">
              <SelectItem
                value="all"
                className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
              >
                All Categories
              </SelectItem>
              {categories.map((category) => (
                <SelectItem
                  key={category}
                  value={category}
                  className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                >
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Minimum Salary Filter */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium text-gray-600">
              Minimum Salary
            </Label>
            <span className="text-sm font-medium text-banking-text">
              ₹{filters.minSalary.toLocaleString()}
            </span>
          </div>
          <Slider
            value={[filters.minSalary]}
            onValueChange={(value) => dispatch(setMinSalary(value[0]))}
            max={1000000}
            min={0}
            step={50000}
            className="w-full [&_[role=slider]]:bg-[#475c70] [&_[role=slider]]:cursor-grab [&_[role=slider]]:active:cursor-grabbing"
          />
        </div>

        {/* Maximum Annual Fee Filter */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Label className="text-sm font-medium text-gray-600">
              Max Annual Fee
            </Label>
            <span className="text-sm font-medium text-banking-text">
              ₹{filters.maxAnnualFee.toLocaleString()}
            </span>
          </div>
          <Slider
            value={[filters.maxAnnualFee]}
            onValueChange={(value) => dispatch(setMaxAnnualFee(value[0]))}
            max={10000}
            min={0}
            step={500}
            className="w-full [&_[role=slider]]:bg-[#475c70] [&_[role=slider]]:cursor-grab [&_[role=slider]]:active:cursor-grabbing"
          />
        </div>

        {/* Toggle Filters */}
        <div className="space-y-4">
          {/* Lounge Access Filter */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Lounge Access
              </Label>
              <p className="text-xs text-gray-400">
                Includes airport lounge benefits
              </p>
            </div>
            <Switch
              checked={filters.loungeAccess === true}
              onCheckedChange={(checked) =>
                dispatch(setLoungeAccess(checked ? true : null))
              }
              className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-300 transition-colors duration-300 ease-in-out cursor-pointer"
            />
          </div>

          {/* Fuel Surcharge Waiver Filter */}
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <Label className="text-sm font-medium text-gray-600">
                Fuel Surcharge Waiver
              </Label>
              <p className="text-xs text-gray-400">
                Waives fuel transaction fees
              </p>
            </div>
            <Switch
              checked={filters.fuelSurcharge === true}
              onCheckedChange={(checked) =>
                dispatch(setFuelSurcharge(checked ? true : null))
              }
              className="data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-300 transition-colors duration-300 ease-in-out cursor-pointer"
            />
          </div>
        </div>

        {/* Sort Options */}
        <div className="space-y-4 pt-2">
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-600">Sort By</Label>
            <Select
              value={filters.sortBy}
              onValueChange={(value: any) => dispatch(setSortBy(value))}
            >
              <SelectTrigger className="h-10 bg-gray-50 border-gray-200 hover:border-banking-text cursor-pointer">
                <SelectValue className="text-banking-text" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-100 shadow-lg">
                {sortOptions.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Order */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-600">
              Sort Order
            </Label>
            <Select
              value={filters.sortOrder}
              onValueChange={(value: any) => dispatch(setSortOrder(value))}
            >
              <SelectTrigger className="h-10 bg-gray-50 border-gray-200 hover:border-banking-text cursor-pointer">
                <SelectValue className="text-banking-text" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-100 shadow-lg">
                <SelectItem
                  value="desc"
                  className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                >
                  Descending
                </SelectItem>
                <SelectItem
                  value="asc"
                  className="hover:bg-gray-50 focus:bg-gray-50 cursor-pointer"
                >
                  Ascending
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;