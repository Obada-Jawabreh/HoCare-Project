import React, { useState } from "react";

function FAQSection() {
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);
  const [showAnswer3, setShowAnswer3] = useState(false);

  return (
    <div className="bg-prim-dark p-8 mt-16">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold text-black">
          Frequently Asked Questions
        </p>
      </div>
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          <FAQItem
            question="What services do we provide?"
            answer="We provide a variety of services including physical therapy, occupational therapy, and home nursing."
            showAnswer={showAnswer1}
            setShowAnswer={setShowAnswer1}
          />
          <FAQItem
            question="How can I make an appointment?"
            answer="You can make an appointment by contacting us through our website or by calling our office."
            showAnswer={showAnswer2}
            setShowAnswer={setShowAnswer2}
          />
          <FAQItem
            question="Do you accept health insurance?"
            answer="Yes, we accept various health insurance plans. Please contact us for more details."
            showAnswer={showAnswer3}
            setShowAnswer={setShowAnswer3}
          />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, showAnswer, setShowAnswer }) {
  return (
    <>
      <div className="flex justify-between items-center mt-10">
        <p className="text-black text-lg">{question}</p>
        <p
          className="text-black font-bold text-2xl cursor-pointer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer ? "-" : "+"}
        </p>
      </div>
      {showAnswer && (
        <div className="mt-4 text-black">{answer}</div>
      )}
      <hr className="my-4 border-black" />
    </>
  );
}

export default FAQSection;