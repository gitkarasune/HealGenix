"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import countries from "world-countries";

const SignUpPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-4">
      <Card className="w-full max-w-[500px] shadow-lg">
        <CardHeader></CardHeader>
        <CardContent>
          <form className="space-y-4">
            {!isLogin && (
              <>
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    className="py-6 rounded-xl dark:outline-gray-900 outline-gray-900"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Select your country
                  </label>
                  <select className="w-full py-3 border rounded-lg">
                    {countries.map((country) => (
                      <option key={country.cca2} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                className="py-6 rounded-xl dark:outline-gray-900 outline-gray-900"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <Button className="w-full" size={"lg"} type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={toggleAuthMode}
                className="text-blue-500 hover:underline ml-1"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;
