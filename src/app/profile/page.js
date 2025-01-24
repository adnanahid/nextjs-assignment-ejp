import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Profile | YourApp",
};

export default async function Profile() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  let user = null;
  try {
    user = await getUser();
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }


  return (
    <div
      className="flex items-center justify-center"
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      <div className="p-6 max-w-[400px] mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome to your profile!
        </h1>
        {user ? (
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Name:</p>
              <p className="text-lg text-gray-800">
                {user.given_name} {user.family_name}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email:</p>
              <p className="text-lg text-gray-800">{user.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">User ID:</p>
              <p className="text-lg text-gray-800">{user.id}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">
            Unable to fetch user details. Please try refreshing the page or
            contact support.
          </p>
        )}
      </div>
    </div>
  );
}
