"use client"

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin((prev) => !prev);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">
                        {isLogin ? "Login" : "Sign Up"}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form className="space-y-4">
                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <Input placeholder="Enter your name" required />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium mb-1">Email Address</label>
                            <Input type="email" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <Input type="password" placeholder="Enter your password" required />
                        </div>
                        <Button className="w-full" type="submit">
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

export default AuthForm;
