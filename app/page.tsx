"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define a type for our locations
type Location = {
  value: string; // URL-friendly slug
  label: string; // Display name
  date: string; // Opening date
};

// The Maryland locations with opening dates
const mdLocations: Location[] = [
  { value: "elkridge", label: "Elkridge", date: "Tuesday, October 14th" },
  { value: "germantown", label: "Germantown", date: "Tuesday, October 21st" },
  { value: "pasadena", label: "Pasadena", date: "Tuesday, October 21st" },
  { value: "towson", label: "Towson", date: "Tuesday, October 21st" },
];

function LocationSelectorContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract and validate email from URL parameters
  const emailParam = searchParams.get("e");
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validEmail = emailParam && isValidEmail(emailParam) ? emailParam : null;

  const handleLocationClick = (locationValue: string) => {
    if (locationValue) {
      // Using the Zen Leaf URL structure based on previous context
      let sweedSignUpUrl = `https://zenleafdispensaries.com/locations/${locationValue}/menu/sign-up?new-store-experience-coming-soon=true`;

      // Append email parameter if valid email is present
      if (validEmail) {
        sweedSignUpUrl += `&e=${encodeURIComponent(validEmail)}`;
      }

      router.push(sweedSignUpUrl);
    }
  };

  const logoUrl =
    "https://zenleafdispensaries.com/assets/images/zen-leaf-logo-with-text-white-1.svg";

  return (
    <div className="flex min-h-screen flex-col items-center justify-start bg-white p-4 font-sans">
      <div className="w-full max-w-sm mx-auto">
        <img
          src={logoUrl || "/placeholder.svg"}
          alt="Zen Leaf Logo"
          className="mb-4 mt-4 h-10 mx-auto"
          style={{ filter: "brightness(0%)" }}
        />

        <Card className="w-full bg-white border-0 shadow-none">
          <CardHeader className="text-center pt-2 px-0">
            <CardTitle className="font-jost text-base font-bold text-gray-900 pb-2 px-2">
              Maryland, your new Zen Leaf shopping experience begins in October.
            </CardTitle>
            <p className="font-bold pt-2 border-t border-black text-sm">
              Choose your preferred location:
            </p>
          </CardHeader>
          <CardContent className="px-2 pt-0">
            <div className="grid grid-cols-1 gap-3">
              {mdLocations.map((location) => (
                <Button
                  key={location.value}
                  variant="default"
                  size="lg"
                  className="font-sans w-full transform whitespace-normal rounded bg-black py-4 text-sm text-white shadow-sm transition-all hover:bg-gray-900 hover:shadow-md active:scale-95"
                  onClick={() => handleLocationClick(location.value)}
                >
                  <div className="flex flex-col items-start w-full">
                    <span className="font-semibold">{location.label}</span>
                    <span className="text-xs opacity-90">{location.date}</span>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function LocationSelectorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationSelectorContent />
    </Suspense>
  );
}
