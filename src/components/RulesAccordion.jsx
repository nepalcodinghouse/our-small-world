import React, { useState } from 'react';

const RulesAccordion = () => {
  const [openIndices, setOpenIndices] = useState(new Set());

  const toggleAccordion = (index) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const openAll = () => {
    const allIndices = new Set(rules.map((_, index) => index));
    setOpenIndices(allIndices);
  };

  const closeAll = () => {
    setOpenIndices(new Set());
  };

  const rules = [
    {
      title: "No Pornography",
      content: "Strictly no adult or inappropriate content of any kind. This includes explicit images, videos, text, or links to such content.",
      icon: ""
    },
    {
      title: "Respect Nations & Leaders",
      content: "Do not speak negatively about any nation, its leaders, or use curse words against them. Political discussions should remain respectful and constructive.",
      icon: ""
    },
    {
      title: "No Unapproved Links",
      content: "Do not share random links, spam, or promotional content without approval. Only share links that add value to the discussion.",
      icon: ""
    },
    {
      title: "Be Respectful",
      content: "Use kind and respectful language at all times. Hate speech, bullying, and harassment will not be tolerated. Treat others as you would like to be treated.",
      icon: ""
    },
    {
      title: "Stay On Topic",
      content: "Keep all discussions relevant to the purpose and theme of our community. Off-topic discussions should be moved to appropriate channels.",
      icon: ""
    },
    {
      title: "No Spamming",
      content: "Avoid sending repeated or unnecessary messages that disrupt conversations. This includes excessive emojis, repetitive text, or chain messages.",
      icon: ""
    },
    {
      title: "Positive Vibes Only",
      content: "Encourage, support, and uplift one another in all interactions. Share positive experiences and help others when possible.",
      icon: ""
    },
    {
      title: "English Mandatory",
      content: "All communications must be in English. Native languages are not permitted in the main group. This ensures everyone can participate in discussions.",
      icon: ""
    },
    {
      title: "No Personal Attacks",
      content: "Criticism should be constructive and never personal. Focus on ideas, not individuals. Disagreements are fine, but personal attacks are not.",
      icon: ""
    },
    {
      title: "No Impersonation",
      content: "Do not pretend to be someone you're not, including celebrities, public figures, or other community members. Authenticity is valued here.",
      icon: ""
    },
    {
      title: "Report Issues Appropriately",
      content: "If you witness violations of these rules, report them to moderators through appropriate channels rather than confronting individuals directly.",
      icon: ""
    },
    {
      title: "Follow Moderator Instructions",
      content: "Listen to and comply with instructions from community moderators. They are here to help maintain a positive environment for everyone.",
      icon: ""
    }
  ];

  return (
    <div className="mt-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          <span className="px-2">OUR SMALL WORLD – GROUP RULES</span>
        </h2>
        <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
        <div className="mt-4 flex justify-center space-x-4">
          <button 
            onClick={openAll}
            className="text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium py-1 px-3 rounded-lg transition duration-200"
          >
            Expand All
          </button>
          <button 
            onClick={closeAll}
            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-lg transition duration-200"
          >
            Collapse All
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
        {rules.map((rule, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              className="flex items-center justify-between w-full p-5 text-left focus:outline-none hover:bg-gray-50 transition-all duration-300 ease-in-out"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center">
                <div className="bg-indigo-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-800 font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="ml-4 text-lg font-bold text-gray-900">
                  <span className="text-left">{rule.title}</span>
                </h3>
              </div>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-500 ease-in-out ${openIndices.has(index) ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndices.has(index) ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-5 pb-5 pl-16 pt-2">
                <p className="text-gray-700 text-base">{rule.content}</p>
              </div>
            </div>
          </div>
        ))}
        
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <div className="flex items-center justify-center">
            <span className="text-gray-900 font-bold text-lg text-center">
              <span className="px-2">CONSEQUENCES OF VIOLATIONS</span>
            </span>
          </div>
          <p className="text-center mt-3 text-gray-600">
            Breaking these rules may result in warnings, temporary mutes, or permanent removal from the group. 
            Serious violations may result in immediate expulsion without prior warning.
          </p>
          <div className="mt-4 text-center">
            <button 
              onClick={openAll}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-sm underline"
            >
              Review all rules again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesAccordion;