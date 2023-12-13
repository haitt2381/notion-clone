"use client"

import { ReactChildren } from "@/app/layout";
import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";

import { Spinner } from "@/components/spinner";

import Navigation from "@/app/(main)/_components/navigation";

const MainLayout = ({ children }: ReactChildren) => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    )
  }
  
  if ( !isAuthenticated ) {
    return redirect("/")
  }
  
  return (
    <div className="h-full flex dark:bg-[#1F1F1F]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;