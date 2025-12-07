import React, { useState } from 'react';

const RulesAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rules = [
    {
      title: "🚫 No Pornography",
      content: "Strictly no adult or inappropriate content of any kind.",
      icon: "🚫"
    },
    {
      title: "Respect Nations & Leaders",
      content: "Do not speak negatively about any nation, its leaders, or use curse words against them.",
      icon: "🏛️"
    },
    {
      title: "🔗 No Unapproved Links",
      content: "Do not share random links, spam, or promotional content without approval.",
      icon: "🔗"
    },
    {
      title: "💬 Be Respectful",
      content: "Use kind and respectful language at all times. Hate speech, bullying, and harassment will not be tolerated.",
      icon: "💬"
    },
    {
      title: "📌 Stay On Topic",
      content: "Keep all discussions relevant to the purpose and theme of our community.",
      icon: "📌"
    },
    {
      title: "🚷 No Spamming",
      content: "Avoid sending repeated or unnecessary messages that disrupt conversations.",
      icon: "🚷"
    },
    {
      title: "🌟 Positive Vibes Only",
      content: "Encourage, support, and uplift one another in all interactions.",
      icon: "🌟"
    },
    {
      title: "English Mandatory",
      content: "All communications must be in English. Native languages are not permitted in the main group.",
      icon: "🔤"
    }
  ];

  return (
    <div className="mt-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center">
          <span className="text-4xl mr-3">🌍</span>
          OUR SMALL WORLD – GROUP RULES
          <span className="text-4xl ml-3">🌱</span>
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-600 shadow-lg overflow-hidden">
        {rules.map((rule, index) => (
          <div key={index} className="border-b border-gray-700 last:border-b-0">
            <button
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none hover:bg-gray-700 transition-all duration-300 ease-in-out"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <div className="bg-indigo-900/30 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="ml-4 text-lg font-bold text-white flex items-center">
                  <span className="mr-2">{rule.icon}</span>
                  {rule.title}
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-white transform transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 pl-16 pt-2">
                <p className="text-gray-200">{rule.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-6 bg-gray-700 border-t border-gray-600">
          <div className="flex items-center justify-center">
            <span className="text-white font-bold text-lg flex items-center">
              <span className="mr-2">⚠️</span>
              CONSEQUENCES OF VIOLATIONS
            </span>
          </div>
          <p className="text-center mt-3 text-gray-200">
            Breaking these rules may result in warnings, temporary mutes, or permanent removal from the group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesAccordion;