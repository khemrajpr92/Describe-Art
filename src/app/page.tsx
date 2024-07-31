import React from "react";
import UserGuides from "@/components/UserGuide";
import Accordion from "@/components/UI/Accordion";
import WriteRightPrompts from "@/components/WriteRightPrompts";
import GetInTouch from "@/components/GetInTouch";
import HeaderAndFooterLayout from "@/components/HeaderAndFooterLayout";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <HeaderAndFooterLayout>
      <div className="padding-x flex-Col gap-20">
        <Banner />
        <UserGuides />
        <WriteRightPrompts />

        {/* FAQs */}
        <section className="mx-auto w-full">
          <h2 className="text-medium text-center">You ask. We answer</h2>
          <div className="mt-6">
            <Accordion />
          </div>
        </section>

        <GetInTouch />
      </div>
    </HeaderAndFooterLayout>
  );
}
