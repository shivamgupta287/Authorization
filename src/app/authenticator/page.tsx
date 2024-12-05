"use client";

import { SignIn } from "@clerk/nextjs";

export default function AuthenticatorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <SignIn 
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "bg-background",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton: "text-foreground",
            formFieldLabel: "text-foreground",
            formFieldInput: "bg-background text-foreground",
            footerActionLink: "text-primary hover:text-primary/90",
          },
        }}
      />
    </div>
  );
}
