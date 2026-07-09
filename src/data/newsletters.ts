import { Newsletter } from "../types";
import newsletter1Thumbnail from "../assets/images/newsletter1_thumbnail.png";
import newsletter1Middle from "../assets/images/newsletter1_middle.jpg";
import newsletter2Thumbnail from "../assets/images/newsletter2_thumbnail.png";
import newsletter2Middle from "../assets/images/newsletter2_middle.jpg";
import newsletter3Thumbnail from "../assets/images/newsletter3_thumbnail.png";
import newsletter3Middle from "../assets/images/newsletter3_middle.jpg";
import newsletter4Thumbnail from "../assets/images/newsletter4_thumbnail.png";
import newsletter4Middle from "../assets/images/newsletter4_middle.jpg";
import newsletter5Thumbnail from "../assets/images/newsletter5_thumbnail.png";
import newsletter5Middle from "../assets/images/newsletter5_middle.jpg";
import newsletter6Thumbnail from "../assets/images/newsletter6_thumbnail.png";
import newsletter6Middle from "../assets/images/newsletter6_middle.jpg";
import newsletter7Thumbnail from "../assets/images/newsletter7_thumbnail.png";
import newsletter7Middle from "../assets/images/newsletter7_middle.jpg";
import newsletter8Thumbnail from "../assets/images/newsletter8_thumbnail.png";
import newsletter8Middle from "../assets/images/newsletter8_middle.jpg";

export const newsletters: Newsletter[] = [
  {
    id: "the-only-data-foundation-playbook-you-need",
    title: "The Data Foundation Playbook: Why Your AI Fails (And How to Fix It)",
    date: "Jul 08, 2026",
    tag: "AI STRATEGY",
    excerpt: "Your AI project will fail. Not because the technology is bad. Because your data is a mess. I've spent the last month studying companies that actually scaled AI, not the ones who talk about it on LinkedIn, but the ones who shipped it, measured it, and made money from it. And I keep seeing the same pattern.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter8Thumbnail,
    featured: true,
    content: [
      {
        type: "paragraph",
        value: "Your AI project will fail."
      },
      {
        type: "paragraph",
        value: "Not because the technology is bad."
      },
      {
        type: "paragraph",
        value: "Because your data is a mess."
      },
      {
        type: "paragraph",
        value: "I've spent the last month studying companies that actually scaled AI, not the ones who talk about it on LinkedIn, but the ones who shipped it, measured it, and made money from it."
      },
      {
        type: "paragraph",
        value: "And I keep seeing the same pattern."
      },
      {
        type: "paragraph",
        value: "The companies that win at AI don't start with AI."
      },
      {
        type: "paragraph",
        value: "They start with something boring."
      },
      {
        type: "paragraph",
        value: "Something nobody wants to talk about at conferences. Something that feels like it's slowing you down when everyone else is racing ahead."
      },
      {
        type: "paragraph",
        value: "They start with data infrastructure."
      },
      {
        type: "paragraph",
        value: "This isn't a theory. This is what actually happened at Capital One, Shopify, Oscar Health, and dozens of other companies that scaled AI successfully."
      },
      {
        type: "paragraph",
        value: "This newsletter breaks down exactly how they did it - with real numbers, real timelines, and the connecting thread that ties it all together."
      },
      {
        type: "subheading",
        value: "The Counterintuitive Bet: Capital One's $150M Pause"
      },
      {
        type: "paragraph",
        value: "Capital One spent $0 on AI models in Year 1. They spent $150M on something else instead."
      },
      {
        type: "paragraph",
        value: "While competitors rushed to deploy ChatGPT wrappers, Capital One's CTO made a bet that looked insane: pause all AI projects for 12 months."
      },
      {
        type: "paragraph",
        value: "What they built instead:"
      },
      {
        type: "paragraph",
        value: "• Unified 47 data sources into one platform"
      },
      {
        type: "paragraph",
        value: "• Cleaned 15 years of legacy customer data"
      },
      {
        type: "paragraph",
        value: "• Built APIs so systems could actually talk to each other"
      },
      {
        type: "paragraph",
        value: "The result?"
      },
      {
        type: "paragraph",
        value: "When they finally turned on AI in Year 2, their fraud detection improved 34% in 90 days."
      },
      {
        type: "paragraph",
        value: "Their competitors? Still debugging why their AI hallucinates customer credit scores."
      },
      {
        type: "paragraph",
        value: "Why this worked: Capital One understood something fundamental. AI is only as good as the data it's trained on. If your data is fragmented, messy, and inconsistent, your AI will be too."
      },
      {
        type: "paragraph",
        value: "So they fixed the foundation first."
      },
      {
        type: "subheading",
        value: "The 4 Questions That Determine If You're Ready"
      },
      {
        type: "paragraph",
        value: "Here's the diagnostic I use when companies ask me if they're ready to scale AI."
      },
      {
        type: "paragraph",
        value: "Before you invest another dollar, answer these 4 questions honestly:"
      },
      {
        type: "paragraph",
        value: "1. Can your systems talk to each other?"
      },
      {
        type: "paragraph",
        value: "If your customer data lives in 5 different databases that don't share a common API, your AI will hallucinate. Every time."
      },
      {
        type: "paragraph",
        value: "Capital One had 47 data sources. None of them talked to each other. They spent 12 months building the connective tissue."
      },
      {
        type: "paragraph",
        value: "2. Is your data clean?"
      },
      {
        type: "paragraph",
        value: "Legacy data from 15 years ago has different formats, missing fields, and inconsistent naming. AI trained on messy data produces messy results."
      },
      {
        type: "paragraph",
        value: "Capital One cleaned 15 years of customer data before turning on a single AI model."
      },
      {
        type: "paragraph",
        value: "3. Can you explain where the data came from?"
      },
      {
        type: "paragraph",
        value: "If your AI can't cite its sources, your employees won't trust it. And if employees don't trust it, they won't use it."
      },
      {
        type: "paragraph",
        value: "This is where most companies fail. They deploy AI that works technically but fails socially."
      },
      {
        type: "paragraph",
        value: "4. Can you monitor if it's still working?"
      },
      {
        type: "paragraph",
        value: "Data drifts. Models degrade. If you're not monitoring in real-time, you won't know your AI is broken until customers complain."
      },
      {
        type: "paragraph",
        value: "The connecting thread: These 4 questions aren't separate problems. They're all symptoms of the same root cause: weak data infrastructure."
      },
      {
        type: "paragraph",
        value: "Fix the foundation, and all 4 answers become \"yes.\""
      },
      {
        type: "subheading",
        value: "How Infrastructure Transforms Teams: The Shopify Story"
      },
      {
        type: "paragraph",
        value: "Here's where it gets interesting."
      },
      {
        type: "paragraph",
        value: "Once you fix the foundation, something unexpected happens."
      },
      {
        type: "paragraph",
        value: "Your team transforms."
      },
      {
        type: "paragraph",
        value: "Shopify saw this firsthand when they built their data platform."
      },
      {
        type: "paragraph",
        value: "What they built BEFORE scaling AI:"
      },
      {
        type: "paragraph",
        value: "• Unified data warehouse: All customer, product, and transaction data in one place"
      },
      {
        type: "paragraph",
        value: "• Real-time APIs: Systems that could query and update data instantly"
      },
      {
        type: "paragraph",
        value: "• Clean data pipelines: Automated data quality checks at every step"
      },
      {
        type: "paragraph",
        value: "Then, and only then -> they started deploying AI at scale."
      },
      {
        type: "paragraph",
        value: "The shift?"
      },
      {
        type: "paragraph",
        value: "Their support team went from manually answering repetitive questions to using AI that could pull from their entire data warehouse."
      },
      {
        type: "paragraph",
        value: "Their developers went from writing custom queries to directing AI systems that already had access to clean, unified data."
      },
      {
        type: "paragraph",
        value: "Productivity jumped. Development speed increased. Customer satisfaction improved."
      },
      {
        type: "paragraph",
        value: "The lesson: Mid-sized companies don't need bigger AI teams. They need better data infrastructure so AI can do the heavy lifting."
      },
      {
        type: "paragraph",
        value: "Why this matters: You can't skip this step. If you deploy AI on broken infrastructure, your team will spend all their time debugging data issues instead of building features. I've experienced this multiple times as a data scientist."
      },
      {
        type: "subheading",
        value: "The Trust Architecture: Oscar Health"
      },
      {
        type: "paragraph",
        value: "Oscar Health's AI got an 82.6% approval rating from employees. Most enterprise AI gets 12%."
      },
      {
        type: "paragraph",
        value: "What did Oscar do differently?"
      },
      {
        type: "paragraph",
        value: "They didn't start with ChatGPT. They spent 8 months building what they call a \"data orchestration layer.\""
      },
      {
        type: "paragraph",
        value: "The architecture:"
      },
      {
        type: "paragraph",
        value: "• Intent classification: Routes questions to the right system"
      },
      {
        type: "paragraph",
        value: "• Targeted retrieval: Pulls from multiple databases simultaneously"
      },
      {
        type: "paragraph",
        value: "• Internal API integration: Unified access to disparate data"
      },
      {
        type: "paragraph",
        value: "• Answer synthesis: Combines everything with citations"
      },
      {
        type: "paragraph",
        value: "Only after this foundation was rock-solid did they add LLMs on top."
      },
      {
        type: "paragraph",
        value: "Now their \"AI Superagent\" handles prior authorizations, prescription renewals, and benefit questions, with sources cited from 6 different systems."
      },
      {
        type: "paragraph",
        value: "The insight: Employees trust AI that shows its work. But AI can only show its work if your data infrastructure supports it."
      },
      {
        type: "paragraph",
        value: "The connecting thread: Capital One built unified data. Shopify built unified data. Oscar built unified data. Every company that scales AI successfully does the same thing first: they make their data accessible, clean, and traceable."
      },
      {
        type: "subheading",
        value: "The Sequence Matters: Why Order Determines Outcome"
      },
      {
        type: "paragraph",
        value: "Most companies approach AI like this:"
      },
      {
        type: "paragraph",
        value: "❌ The Backward Approach:"
      },
      {
        type: "paragraph",
        value: "• Deploy AI model (because everyone else is doing it)"
      },
      {
        type: "paragraph",
        value: "• Realize data is messy (model hallucinates, employees don't trust it)"
      },
      {
        type: "paragraph",
        value: "• Try to clean data while model is live (impossible to fix foundation while building on top)"
      },
      {
        type: "paragraph",
        value: "• Model degrades, trust erodes, project dies"
      },
      {
        type: "paragraph",
        value: "✅ The Forward Approach:"
      },
      {
        type: "paragraph",
        value: "• Audit data quality (answer the 4 questions honestly)"
      },
      {
        type: "paragraph",
        value: "• Build unified data platform (like Capital One, Shopify, Oscar)"
      },
      {
        type: "paragraph",
        value: "• Establish monitoring & governance (so you know when things break)"
      },
      {
        type: "paragraph",
        value: "• Deploy AI on solid foundation (fast, because infrastructure is ready)"
      },
      {
        type: "paragraph",
        value: "• Scale with confidence (because you built it right)"
      },
      {
        type: "paragraph",
        value: "Capital One paused for 12 months to build the foundation. Then scaled in 90 days."
      },
      {
        type: "paragraph",
        value: "Oscar spent 8 months on data orchestration. Then achieved 82.6% employee approval."
      },
      {
        type: "paragraph",
        value: "Shopify built unified data first. Then transformed their team's productivity."
      },
      {
        type: "paragraph",
        value: "The pattern is clear: Build the boring infrastructure first. Scale AI second."
      },
      {
        type: "image",
        value: newsletter8Middle
      },
      {
        type: "paragraph",
        value: "The connecting thread: Data infrastructure is the foundation. Governance is the guardrails. Together, they're what separates companies that scale AI from companies that crash."
      },
      {
        type: "paragraph",
        value: "Until next time,"
      },
      {
        type: "paragraph",
        value: "Pan Seth"
      }
    ]
  },
  {
    id: "when-targets-ai-knew-too-much-privacy-scandal",
    title: "Target's AI told a father his daughter was pregnant. Before she did.",
    date: "Jul 08, 2026",
    tag: "AI GOVERNANCE",
    excerpt: "Here's what happened: A father walked into Target, furious. \"Why are you sending my teenage daughter coupons for baby clothes and cribs? She's in high school!\" The manager apologized profusely. Sent him home with apology coupons. A week later, the father came back.. \"I owe you an apology. My daughter is pregnant. I just didn't know yet.\"",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter7Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "Here's what happened: A father walked into Target , furious."
      },
      {
        type: "paragraph",
        value: "\"Why are you sending my teenage daughter coupons for baby clothes and cribs? She's in high school!\""
      },
      {
        type: "paragraph",
        value: "The manager apologized profusely. Sent him home with apology coupons. A week later, the father came back.."
      },
      {
        type: "paragraph",
        value: "\"I owe you an apology. My daughter is pregnant. I just didn't know yet.\""
      },
      {
        type: "paragraph",
        value: "Target's AI had figured it out before her own father!! This is a classic example of AI governance gone WRONG."
      },
      {
        type: "subheading",
        value: "So... What Exactly Is AI Governance?"
      },
      {
        type: "paragraph",
        value: "Look, I know \"governance\" sounds boring. Like something from a compliance manual that no one reads."
      },
      {
        type: "paragraph",
        value: "But here's what it actually is:"
      },
      {
        type: "paragraph",
        value: "AI governance = the rules that keep your AI from becoming a lawsuit."
      },
      {
        type: "paragraph",
        value: "Think of it like traffic rules. You could drive without them. But things would get messy real fast."
      },
      {
        type: "image",
        value: newsletter7Middle
      },
      {
        type: "paragraph",
        value: "Target's privacy scandal that made headlines in 2012 and changed how we think about AI governance"
      },
      {
        type: "paragraph",
        value: "AI governance includes:"
      },
      {
        type: "paragraph",
        value: "• Guidelines on what AI can and can't do"
      },
      {
        type: "paragraph",
        value: "• Guardrails to prevent disasters"
      },
      {
        type: "paragraph",
        value: "• Policies that protect both the company and customers"
      },
      {
        type: "paragraph",
        value: "• Tools to monitor what's actually happening"
      },
      {
        type: "paragraph",
        value: "In Target's case?"
      },
      {
        type: "paragraph",
        value: "Their AI was technically brilliant. It analyzed shopping patterns and predicted pregnancy with scary accuracy. But no one asked: \"Should we be doing this? What could go wrong?\""
      },
      {
        type: "subheading",
        value: "What Actually Went Wrong"
      },
      {
        type: "paragraph",
        value: "Target's AI wasn't broken. It was working exactly as designed. The problem?"
      },
      {
        type: "paragraph",
        value: "No one thought about the human impact. It tracked purchases (unscented lotion, supplements, cotton balls), identified patterns, and sent targeted coupons- pretty much what it was designed to do."
      },
      {
        type: "paragraph",
        value: "But what the AI didn't consider:"
      },
      {
        type: "paragraph",
        value: "• Privacy (does she want people to know?)"
      },
      {
        type: "paragraph",
        value: "• Timing (has she told her family yet?)"
      },
      {
        type: "paragraph",
        value: "• Consent (did she agree to this?)"
      },
      {
        type: "paragraph",
        value: "This is why governance matters. Not to slow down innovation. But to ask the hard questions BEFORE you deploy."
      },
      {
        type: "subheading",
        value: "How to Make AI Governance Actually Happen"
      },
      {
        type: "paragraph",
        value: "Okay, so you're thinking: \"Great story. But how do I make sure this doesn't happen at MY company?\""
      },
      {
        type: "paragraph",
        value: "Here are 5 direct pointers:"
      },
      {
        type: "paragraph",
        value: "1. Start with \"What could go wrong?\""
      },
      {
        type: "paragraph",
        value: "Before you deploy ANY AI, gather your team and ask: What's the worst-case scenario? Who could this hurt? What would the headline say if this goes badly??"
      },
      {
        type: "paragraph",
        value: "Target should have asked: \"What if we predict something private that the customer hasn't shared yet?\""
      },
      {
        type: "paragraph",
        value: "2. Build privacy into the design, not as an afterthought"
      },
      {
        type: "paragraph",
        value: "Don't just think about what the AI CAN do. Think about what it SHOULD do."
      },
      {
        type: "paragraph",
        value: "Questions to ask:"
      },
      {
        type: "paragraph",
        value: "• Does the customer know we're using their data this way?"
      },
      {
        type: "paragraph",
        value: "• Would they be comfortable if they knew?"
      },
      {
        type: "paragraph",
        value: "• Are we crossing a line between \"creepy\" and \"helpful\"?"
      },
      {
        type: "paragraph",
        value: "3. Test with real humans, not just data"
      },
      {
        type: "paragraph",
        value: "Your AI might be 95% accurate. But what about the 5%? And more importantly: How will PEOPLE react to it? Run small pilots. Get feedback. Adjust before you scale."
      },
      {
        type: "paragraph",
        value: "4. Create a \"kill switch\" culture"
      },
      {
        type: "paragraph",
        value: "Make it okay to say \"stop\" if something feels wrong. Target's team probably saw the pregnancy prediction and thought \"wow, this is impressive!\" Someone should have also thought: \"wait, is this okay?\""
      },
      {
        type: "paragraph",
        value: "Empower people to raise concerns without fear."
      },
      {
        type: "paragraph",
        value: "5. Document your \"why\""
      },
      {
        type: "paragraph",
        value: "When (not if) something goes wrong, you'll need to explain your decisions."
      },
      {
        type: "paragraph",
        value: "Write down:"
      },
      {
        type: "paragraph",
        value: "• Why you built this AI"
      },
      {
        type: "paragraph",
        value: "• What risks you considered"
      },
      {
        type: "paragraph",
        value: "• What safeguards you put in place"
      },
      {
        type: "paragraph",
        value: "• How you'll monitor it"
      },
      {
        type: "paragraph",
        value: "This isn't bureaucracy. It's protection."
      },
      {
        type: "subheading",
        value: "The Bottom Line"
      },
      {
        type: "paragraph",
        value: "AI governance isn't about slowing things down. It's about moving fast WITHOUT breaking things (or people). Target's AI was technically brilliant; but it lacked the guardrails to prevent a privacy disaster."
      },
      {
        type: "paragraph",
        value: "Your turn: Think about the AI systems your company uses (or is building)."
      },
      {
        type: "paragraph",
        value: "Ask yourself: What could go wrong that we haven't thought about? Who's responsible for asking these questions?"
      },
      {
        type: "paragraph",
        value: "If you don't have good answers, you don't have governance."
      },
      {
        type: "paragraph",
        value: "And if you don't have governance? You're could be one deployment away from becoming a cautionary tale."
      },
      {
        type: "subheading",
        value: "Want to Go Deeper?"
      },
      {
        type: "paragraph",
        value: "I write about AI strategy and governance every week - real stories, practical lessons, no corporate jargon."
      },
      {
        type: "paragraph",
        value: "What you'll get:"
      },
      {
        type: "paragraph",
        value: "• Real-world AI failures (and what to learn from them)"
      },
      {
        type: "paragraph",
        value: "• Practical frameworks you can actually use"
      },
      {
        type: "paragraph",
        value: "• Insights from someone who's evaluated 47+ AI architectures"
      },
      {
        type: "paragraph",
        value: "What you won't get: •Boring compliance checklists; •Theoretical frameworks no one uses; •Corporate buzzword bingo"
      },
      {
        type: "paragraph",
        value: "<P.S. Have a Target-style story from your company? (Don't worry, I won't name names.) Hit reply and tell me about it. I read every response.>"
      },
      {
        type: "paragraph",
        value: "Until Next time, Wonderpan♠️"
      }
    ]
  },
  {
    id: "47-second-threat-to-your-career-in-2026",
    title: "The 47-Second Threat to Your Career in 2026 (And How to Survive It)",
    date: "Jul 08, 2026",
    tag: "DECISION MAKING",
    excerpt: "The average attention span in 2024 was 2 minutes. Today? It's 47 seconds. If you're feeling the whiplash, you aren't alone. But here is the reality most leaders are ignoring: AI is about to make that problem catastrophic for your career.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter6Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "The average attention span in 2024 was 2 minutes. Today? It's 47 seconds."
      },
      {
        type: "paragraph",
        value: "If you're feeling the whiplash, you aren't alone. But here is the reality most leaders are ignoring: AI is about to make that problem catastrophic for your career."
      },
      {
        type: "paragraph",
        value: "Here is what nobody is saying out loud."
      },
      {
        type: "paragraph",
        value: "AI will automate every piece of shallow work you do."
      },
      {
        type: "paragraph",
        value: "Happily. Instantly. Without asking permission."
      },
      {
        type: "paragraph",
        value: "The summarizing."
      },
      {
        type: "paragraph",
        value: "The reporting."
      },
      {
        type: "paragraph",
        value: "The inbox triage."
      },
      {
        type: "paragraph",
        value: "The status updates."
      },
      {
        type: "paragraph",
        value: "Gone."
      },
      {
        type: "paragraph",
        value: "If that is where your professional value lives right now, you are not just at risk."
      },
      {
        type: "paragraph",
        value: "You are already behind."
      },
      {
        type: "subheading",
        value: "What Shallow Work Actually Looks Like"
      },
      {
        type: "paragraph",
        value: "Let's make this concrete. Because \"shallow work\" sounds abstract until you see your own Tuesday buried in it.."
      },
      {
        type: "paragraph",
        value: "Say if you are a Product Manager, your shallow work probably looks like this:"
      },
      {
        type: "paragraph",
        value: "You spend 40 minutes writing the weekly status update email that nobody reads."
      },
      {
        type: "paragraph",
        value: "You sit in three sprint ceremonies where you mostly listen and nod."
      },
      {
        type: "paragraph",
        value: "You reformat a roadmap slide for the fourth time because the VP wants a different format."
      },
      {
        type: "paragraph",
        value: "You write ticket descriptions that could have been a five-minute conversation."
      },
      {
        type: "paragraph",
        value: "You pull data from three dashboards to build a report that summarizes what everyone already knows."
      },
      {
        type: "paragraph",
        value: "Today it could look important but tbh none of that is strategy. And none of that is the reason you were hired."
      },
      {
        type: "paragraph",
        value: "AI is already doing all of it. Or it can, starting today."
      },
      {
        type: "paragraph",
        value: "Here is what I want you to set with right now : if you removed every task from your week that AI could handle, what would be left??"
      },
      {
        type: "paragraph",
        value: "For most PMs, the honest answer is: stakeholder alignment, product vision, the judgment calls that require context no model has, and the trust-building that makes a team actually ship."
      },
      {
        type: "paragraph",
        value: "Now that is your mastery zone. That is what you need to go ALL IN on."
      },
      {
        type: "paragraph",
        value: "Everything else is noise that has been masquerading as work."
      },
      {
        type: "subheading",
        value: "The Illusion of Execution"
      },
      {
        type: "paragraph",
        value: "I saw this play out recently working with a company on their AI Strategy."
      },
      {
        type: "paragraph",
        value: "A company was missing delivery outcomes. Deadlines slipping. Stakeholders pointing fingers at each other. Leadership misaligned on who owned what."
      },
      {
        type: "paragraph",
        value: "On the surface, it looked like an execution problem."
      },
      {
        type: "paragraph",
        value: "It wasn't."
      },
      {
        type: "paragraph",
        value: "When AI had quietly absorbed the operational layer, nobody had redefined what the roles actually meant anymore. People were still showing up to do work that no longer existed, and the real strategic work had no owner."
      },
      {
        type: "paragraph",
        value: "The misalignment wasn't personal. It was structural."
      },
      {
        type: "subheading",
        value: "How we addressed this"
      },
      {
        type: "image",
        value: newsletter6Middle
      },
      {
        type: "paragraph",
        value: "We didn't buy more software. We redefined the roles."
      },
      {
        type: "paragraph",
        value: "We asked: when the shallow work is gone, what does this role actually stand for? What is the one area of mastery this person needs to own?"
      },
      {
        type: "paragraph",
        value: "The shift was immediate. You could feel it in the culture first : Clearer ownership, fewer defensive conversations, people leading from their actual expertise instead of defending their calendar."
      },
      {
        type: "paragraph",
        value: "And then it showed up in the deals they could secure."
      },
      {
        type: "paragraph",
        value: "Because when your team leads from depth, clients feel it."
      },
      {
        type: "paragraph",
        value: "This is the real AI problem nobody is talking about."
      },
      {
        type: "paragraph",
        value: "Not the tools. Not the prompts. Not the licenses sitting at 12% usage."
      },
      {
        type: "paragraph",
        value: "It is the identity crisis that happens when shallow work disappears and nobody has told your team what they are now supposed to be masters of."
      },
      {
        type: "subheading",
        value: "How to Build Irreplaceable Mastery"
      },
      {
        type: "paragraph",
        value: "The only people who will stay afloat in this market are the ones who have gone deep on something."
      },
      {
        type: "paragraph",
        value: "Not broad. Not versatile. Not \"a bit of everything.\""
      },
      {
        type: "paragraph",
        value: "Deep. One area of genuine, irreplaceable mastery — a strategic expertise so specific that AI becomes your assistant, not your replacement."
      },
      {
        type: "paragraph",
        value: "But here is the trap most leaders fall into: You cannot build mastery without focus. And you cannot focus when your entire day is built around shallow work."
      },
      {
        type: "paragraph",
        value: "AI is not the threat. The shallow work is the threat. AI is just the thing that finally makes the cost of staying shallow impossible to ignore."
      },
      {
        type: "paragraph",
        value: "For leaders, this means your job description just changed : whether your company has told you yet or not.."
      },
      {
        type: "paragraph",
        value: "To survive the shift, you need to answer three questions today:"
      },
      {
        type: "paragraph",
        value: "1. What is the one area of deep expertise that makes you irreplaceable?"
      },
      {
        type: "paragraph",
        value: "2. What does your role look like when the shallow work is gone?"
      },
      {
        type: "paragraph",
        value: "3. What are the new performance metrics when AI handles the predictable?"
      },
      {
        type: "paragraph",
        value: "The leaders who answer these questions now will define the next decade. The ones who don't will be managed by the ones who did. So well let me give you yet another reframe:"
      },
      {
        type: "paragraph",
        value: "AI won't replace you. But someone who mastered something while you were managing the noise will."
      }
    ]
  },
  {
    id: "toys-r-us-fatal-ai-mistake-legacy-leader-lesson",
    title: "The \"Safe\" Decision That Killed a $7B Company Overnight",
    date: "Jul 05, 2026",
    tag: "AI STRATEGY",
    excerpt: "The most dangerous decisions a CEO can make rarely feel dangerous in the moment. They feel measured. They feel cautious. They feel safe. In 2000, Toys\"R\"Us was the undisputed king of retail. They had the brand, the trust, and the customers.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter5Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "The most dangerous decisions a CEO can make rarely feel dangerous in the moment. They feel measured. They feel cautious. They feel safe."
      },
      {
        type: "paragraph",
        value: "In 2000, Toys\"R\"Us was the undisputed king of retail. They had the brand, the trust, and the customers. But e-commerce was rising, and the board was getting nervous. CEO John Eyler needed a digital strategy, and he needed it fast."
      },
      {
        type: "paragraph",
        value: "So he made what looked like a brilliant, risk-mitigating move. He signed a 10-year exclusive partnership with Amazon. Toys \"R\" Us would pay Amazon $50 million a year, plus a cut of sales, to handle all their online fulfillment."
      },
      {
        type: "paragraph",
        value: "Eyler didn't want to build a tech company. He wanted to sell toys. Outsourcing the digital complexity to the experts felt like the responsible, fiduciary choice."
      },
      {
        type: "paragraph",
        value: "It was the decision that ended the company."
      },
      {
        type: "image",
        value: newsletter5Middle
      },
      {
        type: "subheading",
        value: "What Went Wrong"
      },
      {
        type: "paragraph",
        value: "By outsourcing their digital capability, Toys \"R\" Us outsourced their future."
      },
      {
        type: "paragraph",
        value: "They didn't just give Amazon their inventory. They gave Amazon their data. They gave Amazon their customer behavior patterns. Amazon learned exactly how the toy business worked — and then, a few years later, opened their platform to every other toy seller anyway."
      },
      {
        type: "paragraph",
        value: "Toys \"R\" Us sued and won, but the damage was permanent. They had lost years of momentum. They had failed to build their own internal capability. By 2017, they filed for bankruptcy. 33,000 people lost their jobs."
      },
      {
        type: "subheading",
        value: "Why This Matters for AI Right Now"
      },
      {
        type: "paragraph",
        value: "I see CEOs in regulated industries making the exact same calculation today with AI."
      },
      {
        type: "paragraph",
        value: "They are overwhelmed by the complexity. They don't want to build an AI company; they want to run a bank, an insurance firm, a manufacturing plant. So they look for the \"safe\" choice. They buy off-the-shelf tools. They outsource the strategy to vendors. They let the IT department buy subscriptions without changing the business model."
      },
      {
        type: "paragraph",
        value: "They are handing the keys to the kingdom to someone else, because building the capability internally feels too hard."
      },
      {
        type: "subheading",
        value: "How to Avoid the Toys \"R\" Us Trap"
      },
      {
        type: "paragraph",
        value: "If you want to build an untouchable enterprise, you cannot outsource your core capability. You need a dedicated person responsible for creating an overall AI strategy and helping you choose the right balance for your organization."
      },
      {
        type: "paragraph",
        value: "This is the work I do with organizations today."
      },
      {
        type: "paragraph",
        value: "I help leadership teams create clarity around how AI should evolve across the business — from strategy and leadership alignment to adoption, governance, and operational execution. Together, we establish a practical AI Center of Excellence that continues driving progress long after my work is done."
      },
      {
        type: "paragraph",
        value: "Because this is not just about adopting new technology. It is about building the organizational architecture that makes transformation sustainable."
      },
      {
        type: "paragraph",
        value: "This week, I’m also releasing the AI Alignment Index - a strategic diagnostic designed to reveal how aligned your organization truly is for AI transformation across leadership, adoption, execution, and governance. If you want an honest picture of where your organization stands - and where the greatest opportunities may exist - you’ll want to take it."
      },
      {
        type: "paragraph",
        value: "Book a focused strategy session with me directly to map your organization’s AI capability : https://lunacal.ai/pan-seth/focused-ai-strategy-call"
      }
    ]
  },
  {
    id: "microsoft-one-culture-decision-3-trillion-outcome",
    title: "Microsoft's One Culture Decision. A $3 Trillion Outcome.",
    date: "Jun 28, 2026",
    tag: "LEADERSHIP",
    excerpt: "We talk about Microsoft today like their AI dominance was inevitable. It wasn't. In 2014, Microsoft was widely considered a legacy dinosaur. They had completely missed the mobile revolution. They were losing the cloud war to Amazon. But their biggest problem wasn't their product roadmap. It was their people.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter4Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "We talk about Microsoft today like their AI dominance was inevitable. It wasn't."
      },
      {
        type: "paragraph",
        value: "In 2014, Microsoft was widely considered a legacy dinosaur. They had completely missed the mobile revolution. They were losing the cloud war to Amazon. But their biggest problem wasn't their product roadmap. It was their people."
      },
      {
        type: "paragraph",
        value: "Microsoft was paralyzed by a \"know-it-all\" culture. They used a performance review system called stack ranking, which forced managers to grade employees on a curve. If you had a team of ten brilliant engineers, you were forced to label two of them as bottom performers."
      },
      {
        type: "paragraph",
        value: "The result? Employees stopped competing against Apple and Google. They started competing against the person sitting at the next desk."
      },
      {
        type: "paragraph",
        value: "Then Satya Nadella took over as CEO."
      },
      {
        type: "image",
        value: newsletter4Middle
      },
      {
        type: "paragraph",
        value: "Know-it-all culture vs Learn-it-all culture"
      },
      {
        type: "subheading",
        value: "The Pivot"
      },
      {
        type: "paragraph",
        value: "Nadella didn't start his tenure by announcing a massive AI investment. He started by killing stack ranking."
      },
      {
        type: "paragraph",
        value: "He declared that Microsoft was going to undergo a fundamental identity shift — from a \"know-it-all\" company to a \"learn-it-all\" company."
      },
      {
        type: "paragraph",
        value: "As Nadella put it: \"If you take two kids at school, one of them has more innate capability but is a know-it-all. The other person has less innate capability but is a learn-it-all. The learn-it-all does better than the know-it-all.\""
      },
      {
        type: "subheading",
        value: "Why This Matters for Your AI Strategy"
      },
      {
        type: "paragraph",
        value: "Years later, when Microsoft made their massive bet on OpenAI, the company was ready to absorb it. The culture had been rewired to learn, to adapt, and to collaborate."
      },
      {
        type: "paragraph",
        value: "I see leaders today trying to force AI tools into \"know-it-all\" cultures. It never works."
      },
      {
        type: "paragraph",
        value: "If your team is penalized for making mistakes, they will never experiment with generative AI."
      },
      {
        type: "paragraph",
        value: "If your departments are siloed and competing for budget, they will never share the data required to make an enterprise model work."
      },
      {
        type: "paragraph",
        value: "You cannot automate culture change."
      },
      {
        type: "subheading",
        value: "How to Build a Learn-It-All Culture"
      },
      {
        type: "paragraph",
        value: "If you want your organization to actually use the AI you are paying for, you have to change the permission structure. You need a dedicated leader to establish the strategy and build the framework for adoption."
      },
      {
        type: "paragraph",
        value: "This is exactly the work I do with organizations today. I come in to do the hard work of creating clarity for the organization to evolve. I establish a small Center of Excellence (AICOE) that drives the progress made long after my work is done. It is not only about the leaders evolving, but about building the architecture that makes that evolution permanent."
      }
    ]
  },
  {
    id: "klarna-replaced-700-humans-with-ai-then-system-broke",
    title: "Klarna replaced 700 humans with AI. Then the system broke.",
    date: "Jun 15, 2026",
    tag: "AI GOVERNANCE",
    excerpt: "Klarna's CEO made a bold call in late 2024. AI could do the work of 700 humans. So he paused hiring. He cut the workforce from 5,500 to 3,400. He launched an AI chatbot and told the world the future had arrived. The market cheered.. What Happened Next...",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter3Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "Klarna's CEO made a bold call in late 2024."
      },
      {
        type: "paragraph",
        value: "AI could do the work of 700 humans. So he paused hiring."
      },
      {
        type: "paragraph",
        value: "He cut the workforce from 5,500 to 3,400. He launched an AI chatbot and told the world the future had arrived."
      },
      {
        type: "paragraph",
        value: "The market cheered.."
      },
      {
        type: "subheading",
        value: "What Happened Next"
      },
      {
        type: "paragraph",
        value: "Six months later, customer satisfaction had collapsed."
      },
      {
        type: "paragraph",
        value: "The AI handled simple, scripted queries fine. The moment a conversation needed nuance, empathy, or complex reasoning - it failed."
      },
      {
        type: "paragraph",
        value: "Service quality became wildly inconsistent. Customers grew frustrated."
      },
      {
        type: "paragraph",
        value: "The situation became so bad that Klarna had to literally pull software engineers, designers, and marketing staff away from their actual jobs just to answer customer inquiries."
      },
      {
        type: "paragraph",
        value: "The same CEO who had declared humans obsolete was now quietly redeploying them."
      },
      {
        type: "paragraph",
        value: "\"Klarna thought they were cutting costs. But they broke the system their customers relied on.\""
      },
      {
        type: "image",
        value: newsletter3Middle
      },
      {
        type: "paragraph",
        value: "By early 2025, CEO Sebastian Siemiatkowski publicly reversed course, saying it is important that customers always have a clear path to a human. That is a very different message from the one he shared months earlier."
      },
      {
        type: "subheading",
        value: "Why This Keeps Happening"
      },
      {
        type: "paragraph",
        value: "This is the trap most leaders fall into right now. They see AI as a cost tool - a way to cut headcount and compress margins. But removing people without rebuilding the work around them causes systemic failure."
      },
      {
        type: "paragraph",
        value: "Your employees are not just doing tasks. They carry context, relationships, and judgment that AI cannot replicate yet. Remove them without designing what replaces that human layer, and the gaps show up fast."
      },
      {
        type: "paragraph",
        value: "But wait, there is a deeper dynamic too:"
      },
      {
        type: "paragraph",
        value: "When employees feel they compete against AI - or against each other over who uses it better - they stop experimenting. They hide the tools they use. They avoid workflows that might expose a mistake. They default to the safest, lowest-impact behavior."
      },
      {
        type: "paragraph",
        value: "The internal politics you see in your organization? That is what this looks like from the inside."
      },
      {
        type: "paragraph",
        value: "The resistance is not about the technology. It is about the absence of safety, clarity, and a clear signal from leadership about what success looks like."
      },
      {
        type: "subheading",
        value: "The Right Question"
      },
      {
        type: "paragraph",
        value: "The companies winning are not the ones who moved fastest to eliminate roles. They asked a different question:"
      },
      {
        type: "paragraph",
        value: "What can our people accomplish when AI handles everything that should never have been theirs in the first place?"
      },
      {
        type: "paragraph",
        value: "That question shifts the frame from replacement to amplification. It gives employees a reason to embrace AI. And it gives leaders a mandate that is actually achievable."
      },
      {
        type: "subheading",
        value: "If This Is Your Organization Right Now"
      },
      {
        type: "paragraph",
        value: "What Klarna experienced publicly is a version of what most leaders encounter privately. You removed the friction. You bought the tools. But the system still isn't performing the way you imagined it would."
      },
      {
        type: "paragraph",
        value: "That is not a technology failure. It is an adoption architecture failure."
      },
      {
        type: "paragraph",
        value: "I design a custom AI adoption playbook specific to your company - structured workflows and operating norms that enable your team to do more: more profitable, more productive, more powerful, more personalized, more predictable."
      },
      {
        type: "paragraph",
        value: "The goal is not a one-time initiative."
      },
      {
        type: "paragraph",
        value: "The goal is a company where AI is part of who you are - embedded in your culture, your leadership model, and your daily operating norms, not dependent on one champion or one vendor to keep it alive."
      },
      {
        type: "paragraph",
        value: "When your people stop seeing AI as a threat and start seeing it as the accelerator for their best work, everything changes. That is the transformation I build."
      },
      {
        type: "paragraph",
        value: "→ Attend The AI Adoption Accelerator Masterclass this Thursday morning - LIVE with me"
      },
      {
        type: "paragraph",
        value: "We are at the exact moment in 2026 where the gap between companies that get AI right and companies that fall behind is becoming permanent. The decisions being made right now - about culture, about adoption, about leadership, will define the next decade of your organization."
      },
      {
        type: "paragraph",
        value: "This masterclass is not a replay. It is not a course."
      },
      {
        type: "paragraph",
        value: "It is a live session designed for the leader who is ready to stop watching from the sidelines and start building the company that wins."
      },
      {
        type: "paragraph",
        value: "Whether you are the CEO making the call or the leader who needs to bring this conversation to the table - this is the session that gives you the language, the clarity, and the architecture to move."
      },
      {
        type: "paragraph",
        value: "It is not too late. But the window is closing. Register here"
      }
    ]
  },
  {
    id: "the-secret-to-viral-ai-adoption",
    title: "The secret to viral AI adoption (no mandates required)",
    date: "Jun 02, 2026",
    tag: "WORKFORCE ADOPTION",
    excerpt: "How do you get a quarter-million employees to embrace AI — in a regulated environment where a single data breach is a regulatory event? JPMorganChase did it. And they did the exact opposite of what most companies do. They did not mandate it.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter2Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "How do you get a quarter-million employees to embrace AI — in a regulated environment where a single data breach is a regulatory event?"
      },
      {
        type: "paragraph",
        value: "JPMorganChase did it."
      },
      {
        type: "paragraph",
        value: "And they did the exact opposite of what most companies do. They did not mandate it."
      },
      {
        type: "subheading",
        value: "What JPMC Did"
      },
      {
        type: "paragraph",
        value: "When JPMC launched their proprietary LLM Suite, they sent no company-wide edict. No usage quotas. No performance review threats tied to login rates."
      },
      {
        type: "paragraph",
        value: "They built the environment first."
      },
      {
        type: "paragraph",
        value: "They locked down data security so every employee knew it was safe to use the tool without risking client confidentiality. They invested in change management and education. Then they made the platform available on an opt-in basis — to whoever wanted it, in phases."
      },
      {
        type: "paragraph",
        value: "The result was viral adoption."
      },
      {
        type: "paragraph",
        value: "Employees watched their peers work faster and smarter. The fear of missing out took over. People asked for access. Healthy competition replaced hidden workflows and internal politics."
      },
      {
        type: "paragraph",
        value: "JPMC's Chief Analytics Officer called 2024 \"the year employees developed a personal relationship with AI.\" Not a compliance relationship. A 'personal' one."
      },
      {
        type: "paragraph",
        value: "ok pause for a second- Can you imagine how profound that is?"
      },
      {
        type: "paragraph",
        value: "Today, nearly half of their employees use gen AI tools every single day - for tens of thousands of specific, role-relevant tasks."
      },
      {
        type: "image",
        value: newsletter2Middle
      },
      {
        type: "subheading",
        value: "Why Most Companies Get This Wrong"
      },
      {
        type: "paragraph",
        value: "Most leaders manage AI like a software update. They buy the licenses, run a one-hour training session, and wonder why usage sits at 12% three months later."
      },
      {
        type: "paragraph",
        value: "What they don't see is what is happening underneath. Their employees are scared. Scared of breaking something. Scared of looking foolish in front of their peers. Scared of training their own replacements."
      },
      {
        type: "paragraph",
        value: "So they default to the safest, lowest-impact behavior : summarizing emails, writing basic memos, while the real potential of the technology sits untouched."
      },
      {
        type: "paragraph",
        value: "The problem is not the tool. It is the environment."
      },
      {
        type: "paragraph",
        value: "When employees have no psychological safety to experiment, they won't."
      },
      {
        type: "paragraph",
        value: "When they have no clear guardrails about what data is safe, they won't use any."
      },
      {
        type: "paragraph",
        value: "When they don't know how their role changes in an AI-enabled world, they hold on to the old one with everything they have."
      },
      {
        type: "paragraph",
        value: "JPMC understood one thing: You cannot force adoption. You can only build the conditions where adoption becomes the obvious choice."
      },
      {
        type: "paragraph",
        value: "Read that again."
      },
      {
        type: "subheading",
        value: "What Changes When You Get This Right"
      },
      {
        type: "paragraph",
        value: "JPMorgan Chase did not just deploy a tool. They redesigned the unwritten rules of how their organization operates - so that AI adoption was supported by the culture instead of fighting against it. That is the difference between a company that uses AI and a company that becomes AI-native."
      },
      {
        type: "paragraph",
        value: "I help organizations make that same shift. Not through a training program or a pilot. Through a custom AI adoption playbook designed specifically for your company — one that transforms three things simultaneously: your organization's capability (more profitable, more productive, more powerful, more personalized, more predictable), your culture and mindset (employees who are genuinely creative and engaged with AI, not just compliant), and your leadership model (leaders who know how to create the conditions where adoption becomes inevitable)."
      },
      {
        type: "paragraph",
        value: "The result is sustainable. It does not depend on one champion, one initiative, or one external partner to keep it running. It becomes part of who your company is."
      },
      {
        type: "paragraph",
        value: "→ I recently released the AI Alignment Index : a strategic diagnostic designed to reveal exactly where your organization stands across leadership, adoption, execution, and governance. Take it to get an honest picture of where your greatest opportunities are."
      },
      {
        type: "paragraph",
        value: "Subscribe to One Step Forward today to learn from the best industry examples. Cheers."
      }
    ]
  },
  {
    id: "your-team-using-ai-hate-heres-why",
    title: "Your team is using AI. They hate it. Here's why.",
    date: "May 22, 2026",
    tag: "AI STRATEGY",
    excerpt: "The CEO sent one email. And then had to send another one. Last year, Duolingo's co-founder and CEO Luis von Ahn sent his entire company an all-hands email.",
    linkedinUrl: "https://www.linkedin.com/pulse/your-team-using-ai-hate-heres-why-pan-seth-3howe/?trackingId=0nbuq5nNRa%2BHz9HfYJgg%2BA%3D%3D",
    thumbnailUrl: newsletter1Thumbnail,
    featured: false,
    content: [
      {
        type: "paragraph",
        value: "The CEO sent one email. And then had to send another one."
      },
      {
        type: "paragraph",
        value: "Last year, Duolingo's co-founder and CEO Luis von Ahn sent his entire company an all-hands email."
      },
      {
        type: "paragraph",
        value: "He called it going \"AI-first.\" He said the company would gradually stop using contractors for work that AI could handle. Teams would only be allowed to hire new humans if they could demonstrate that the work couldn't be automated."
      },
      {
        type: "paragraph",
        value: "To anyone it sounds like a rational decision. Operationally sound. Financially logical."
      },
      {
        type: "paragraph",
        value: "But the response was immediate, and it was brutal."
      },
      {
        type: "paragraph",
        value: "Employees panicked. Consumers threatened to cancel their subscriptions."
      },
      {
        type: "paragraph",
        value: "The backlash spread across social media fast enough that within weeks, von Ahn had to publish a follow-up clarifying that he did not see AI as replacing what his employees do - that it was a tool to accelerate their work, not a mechanism to eliminate their jobs."
      },
      {
        type: "paragraph",
        value: "He later admitted he hadn't anticipated the blowback. \"Every tech company is doing similar things,\" he said. \"We were just open about it.\""
      },
      {
        type: "paragraph",
        value: "That openness cost him."
      },
      {
        type: "subheading",
        value: "What actually happened inside Duolingo"
      },
      {
        type: "paragraph",
        value: "Here is what most post-mortems of this story miss:"
      },
      {
        type: "paragraph",
        value: "The problem wasn't the decision. The problem was the message the decision sent, and the unsaid psychological contract it broke."
      },
      {
        type: "paragraph",
        value: "When employees read \"we will phase out contractors where AI can do the work,\" they didn't hear operational efficiency. They heard: you are next."
      },
      {
        type: "paragraph",
        value: "And once that thought lands, it doesn't leave. It goes underground. It shows up in how people engage with the tools, how much effort they put into learning them, and eventually - in whether they stay."
      },
      {
        type: "paragraph",
        value: "This is what I call the trust gap. It is the distance between what leadership intends with an AI rollout and what employees actually hear. And it is the single most common reason AI investments fail to deliver."
      },
      {
        type: "subheading",
        value: "The Duolingo lesson of AI Adoption"
      },
      {
        type: "image",
        value: newsletter1Middle
      },
      {
        type: "subheading",
        value: "The numbers behind the feeling"
      },
      {
        type: "paragraph",
        value: "This isn't just a Duolingo problem."
      },
      {
        type: "paragraph",
        value: "72% of managers now believe their employees fear AI tools will make them less valuable at work. 52% of managers themselves are worried AI will lower their own pay."
      },
      {
        type: "paragraph",
        value: "That second number is the one that should stop you."
      },
      {
        type: "paragraph",
        value: "When the people responsible for championing your AI rollout are quietly terrified about their own futures, they don't say so in the leadership meeting. They ask for more time. They raise governance concerns. They want another pilot. They slow everything down, and it looks like diligence, not fear."
      },
      {
        type: "paragraph",
        value: "The anxiety has moved up the hierarchy. And most organizations have no idea it's there, because nobody is measuring it."
      },
      {
        type: "subheading",
        value: "Why compliance looks like adoption"
      },
      {
        type: "paragraph",
        value: "When you force AI adoption without psychological safety, you get a very specific pattern."
      },
      {
        type: "paragraph",
        value: "People show up. They open the tools. They generate a summary, write a draft, run a query. They hit whatever metric the organization is tracking. And then they close the tab and go back to doing the work the way they always have."
      },
      {
        type: "paragraph",
        value: "88% of companies report regular AI use."
      },
      {
        type: "paragraph",
        value: "But research from Harvard Business Review describes most of it as \"performative rather than participatory.\" The tools are running. The transformation is not."
      },
      {
        type: "paragraph",
        value: "The cost isn't just wasted licenses. It is the slow drain of your best people."
      },
      {
        type: "paragraph",
        value: "High performers - the ones who genuinely want to work at an AI-forward organization are watching how leadership handles this. They want to build the future. When they see a mandate without a strategy, without psychological safety, without a clear picture of what their role looks like on the other side of this, they don't fight it. They find somewhere that has figured it out."
      },
      {
        type: "subheading",
        value: "Five things that separate a mandate from a culture"
      },
      {
        type: "paragraph",
        value: "If you are leading an AI rollout right now, here is what the organizations that get this right are doing differently."
      },
      {
        type: "paragraph",
        value: "1. They answer the question nobody is asking out loud."
      },
      {
        type: "paragraph",
        value: "Before any training, before any tool deployment, before any mandate - they tell their people what their role looks like when AI handles the predictable parts. They make the future feel like an upgrade, not a threat."
      },
      {
        type: "paragraph",
        value: "2. They make it safe to be a beginner."
      },
      {
        type: "paragraph",
        value: "The biggest barrier to AI adoption is not technical. It is the fear of looking incompetent in front of peers and managers. The organizations that win create explicit permission to experiment, fail, and learn at every level, including leadership."
      },
      {
        type: "paragraph",
        value: "3. They lead with employee value, not company efficiency."
      },
      {
        type: "paragraph",
        value: "Bank of America didn't launch AI to cut costs. They launched Erica for Employees to help their staff with HR questions and IT support. They solved the employee's problem first. The result was 90% adoption, because trust was already there when the more complex tools arrived."
      },
      {
        type: "paragraph",
        value: "4. They measure what's actually happening."
      },
      {
        type: "paragraph",
        value: "Most organizations track logins and license usage. The ones that build real adoption track whether work has actually changed - whether decisions are faster, whether outputs are better, whether people are using AI in their actual workflows or just in the demo."
      },
      {
        type: "paragraph",
        value: "5. They build governance before they build scale."
      },
      {
        type: "paragraph",
        value: "Governance isn't a compliance exercise. It is the thing that makes people feel safe enough to use the tools without second-guessing every output. When employees know there are guardrails, that the organization has thought through what happens when something goes wrong they engage differently."
      },
      {
        type: "subheading",
        value: "What this means for your organisation"
      },
      {
        type: "paragraph",
        value: "The Duolingo story is not a cautionary tale about communication. It is a cautionary tale about what happens when efficiency moves faster than trust."
      },
      {
        type: "paragraph",
        value: "Von Ahn was right that every tech company is doing similar things. The ones doing it well are not doing it quietly - they are doing it with a strategy that puts the human layer first."
      },
      {
        type: "paragraph",
        value: "If you are the person in your organisation who has to make AI real and not just possible, and you are finding that the technical architecture is the easy part, you are not alone. The hard part has always been the room full of people who have to trust it, use it, and build their future around it."
      },
      {
        type: "paragraph",
        value: "That is the work that does not come with a vendor manual."
      },
      {
        type: "paragraph",
        value: "If that is where you are, the AI Alignment Index is a good place to start. 15 questions. 3 minutes. A clear picture of where your organisation stands across strategy, governance, leadership alignment, workforce adoption, and ROI and what to address first."
      }
    ]
  }
];
