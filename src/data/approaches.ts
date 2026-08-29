export interface Approach {
 slug: string;
 title: string;
 seoTitle?: string;
 shortTitle: string;
 href: string;
 description: string;
 cardDescription: string;
 hero: string;
 whatItIsTitle: string;
 whatItIs: string[];
 sessionTitle: string;
 session: string[];
 considerationsTitle: string;
 considerations: string[];
 related: { label: string; href: string }[];
}

export const approaches: Approach[] = [
 {
 slug: 'trauma-therapy',
 title: 'Trauma Therapy',
 seoTitle: 'Trauma Therapy Approach | Bozeman, MT',
 shortTitle: 'Trauma Therapy',
 href: '/approaches/trauma-therapy/',
 description: 'Learn how Morgan Hale approaches trauma-focused individual counseling in Bozeman, Montana.',
 cardDescription: 'A paced way to work with experiences that still shape how the present feels.',
 hero: 'Trauma work can begin by finding steadier ground in the present before deciding how far back to look.',
 whatItIsTitle: 'The goal is not to live inside the past. It is to understand why the past still changes the terrain now.',
 whatItIs: [
 'Trauma therapy looks at the ways overwhelming experiences can continue to influence attention, trust, emotion, body responses, relationships, and everyday choices.',
 'Morgan may begin with the effects you are noticing now and gradually explore the experiences behind them when that feels useful and manageable.',
 ],
 sessionTitle: 'Orientation comes before exposure.',
 session: [
 'Sessions may focus first on what helps you stay connected to the present, recognize when your system is becoming overwhelmed, and regain a sense of choice.',
 'Deeper exploration can happen later, at a pace that leaves enough stability to keep the work meaningful rather than simply intense.',
 ],
 considerationsTitle: 'There is more than one route through trauma work.',
 considerations: [
 'Detailed retelling is not required for every client or every concern.',
 'Pacing can change with current stress, support, and readiness.',
 'Other approaches may be woven in when they help make the work more understandable or manageable.',
 ],
 related: [
 { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
 { label: 'Meet Morgan', href: '/about/morgan-hale/' },
 ],
 },

 {
 slug: 'internal-family-systems',
 title: 'Internal Family Systems (IFS)',
 seoTitle: 'IFS Therapy | Bozeman, MT',
 shortTitle: 'IFS',
 href: '/approaches/internal-family-systems/',
 description: 'Learn how Morgan Hale may use Internal Family Systems concepts in individual counseling in Bozeman, Montana.',
 cardDescription: 'A framework for understanding the different internal voices that can pull you in opposite directions.',
 hero: 'When different parts of you want different things, the conflict itself can become useful information.',
 whatItIsTitle: 'Internal conflict can be mapped instead of judged.',
 whatItIs: [
 'IFS offers a way to notice the different reactions inside a person—the part that wants change, the part that fears it, the part that criticizes, the part that avoids, or the part that tries to keep everything under control.',
 'Morgan may use this framework to understand what each reaction is protecting and how those internal roles developed over time.',
 ],
 sessionTitle: 'The work often begins by slowing down a familiar reaction.',
 session: [
 'Rather than arguing with a reaction, Morgan may help you notice what it expects, what it fears, and what it is trying to prevent.',
 'That perspective can make it easier to respond with curiosity and choice instead of treating part of yourself as an obstacle to overcome.',
 ],
 considerationsTitle: 'The map is useful only if it helps you navigate.',
 considerations: [
 'You do not have to use IFS terminology outside therapy.',
 'The framework can be combined with body awareness, mindfulness, and direct conversation.',
 'If the language does not fit, Morgan can describe the same pattern another way.',
 ],
 related: [
 { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
 { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
 { label: 'Meet Morgan', href: '/about/morgan-hale/' },
 ],
 },

 {
 slug: 'somatic-experiencing',
 title: 'Somatic Experiencing & Body-Informed Therapy',
 seoTitle: 'Somatic Experiencing Therapy | Bozeman, MT',
 shortTitle: 'Somatic Experiencing',
 href: '/approaches/somatic-experiencing/',
 description: 'Learn how Morgan Hale may use Somatic Experiencing and body-informed practices in counseling in Bozeman, Montana.',
 cardDescription: 'A way to notice the physical signals that can narrow or widen your sense of choice.',
 hero: 'The body often knows that something has changed before the mind has found words for it.',
 whatItIsTitle: 'Physical responses can help reveal where your system feels safe, activated, or shut down.',
 whatItIs: [
 'Stress and emotion can show up as tension, changes in breathing, restlessness, numbness, heaviness, changes in energy, or the urge to move away from something.',
 'Morgan may use body-informed practices to notice those shifts and understand what helps your system regain enough steadiness to stay present.',
 ],
 sessionTitle: 'The body can be observed without becoming the entire focus.',
 session: [
 'A session might include briefly noticing a sensation, posture, breath, or movement while talking about an experience.',
 'Attention can return to ordinary conversation at any time. The practice is meant to support orientation and choice, not create another task to perform correctly.',
 ],
 considerationsTitle: 'Use physical information as one point on the map.',
 considerations: [
 'Not every concern needs body-focused work.',
 'Sensations do not have to be interpreted in one particular way.',
 'Body awareness can be combined with IFS, mindfulness, reflection, and practical problem-solving.',
 ],
 related: [
 { label: 'Trauma & PTSD', href: '/services/trauma-ptsd/' },
 { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
 { label: 'Meet Morgan', href: '/about/morgan-hale/' },
 ],
 },

 {
 slug: 'emotionally-focused-therapy',
 title: 'Emotionally Focused Therapy (EFT) for Individuals',
 seoTitle: 'EFT for Individuals in Bozeman, MT',
 shortTitle: 'EFT',
 href: '/approaches/emotionally-focused-therapy/',
 description: 'Learn how Morgan Hale may use emotion- and attachment-focused ideas in individual counseling in Bozeman, Montana.',
 cardDescription: 'An approach for tracing relationship reactions back to the needs and fears underneath them.',
 hero: 'Relationship patterns can feel inevitable until you can see the route they take from trigger to reaction.',
 whatItIsTitle: 'Emotions can point toward what connection, safety, or distance means to you.',
 whatItIs: [
 'Emotionally focused work pays attention to the patterns that emerge when closeness, trust, vulnerability, or conflict feels uncertain.',
 'At Horizon, Morgan uses these ideas in individual counseling to help clients understand their own reactions and needs. This is not couples therapy.',
 ],
 sessionTitle: 'The work traces the pattern instead of stopping at the argument.',
 session: [
 'Morgan may help you notice what happens before a familiar relationship response, what emotion appears first, and what need or fear may be underneath it.',
 'Earlier relationships can be relevant when they help explain why a current situation feels so familiar or intense.',
 ],
 considerationsTitle: 'Understanding the route does not decide the destination for you.',
 considerations: [
 'Relationship concerns can be explored in individual counseling.',
 'The work is not about assigning blame.',
 'Choices about a relationship remain yours.',
 ],
 related: [
 { label: 'Relationship Concerns', href: '/services/relationship-concerns/' },
 { label: 'Individual Therapy', href: '/services/individual-therapy/' },
 { label: 'Meet Morgan', href: '/about/morgan-hale/' },
 ],
 },

 {
 slug: 'mindfulness-based-therapy',
 title: 'Mindfulness-Informed Therapy',
 seoTitle: 'Mindfulness-Informed Therapy | Bozeman, MT',
 shortTitle: 'Mindfulness',
 href: '/approaches/mindfulness-based-therapy/',
 description: 'Learn how Morgan Hale may use mindfulness and present-moment awareness in individual counseling in Bozeman, Montana.',
 cardDescription: 'Brief practices for returning attention to the moment you are actually in.',
 hero: 'Sometimes perspective changes when attention comes back from the future or the past to the ground beneath you now.',
 whatItIsTitle: 'Mindfulness can be a way of reorienting, not a demand to become calm.',
 whatItIs: [
 'Mindfulness means noticing present experience intentionally. In therapy that may include thoughts, emotions, breathing, sensations, impulses, or where attention keeps wandering.',
 'The purpose is not to empty the mind. It is to notice what is happening with enough clarity to choose what you want to do next.',
 ],
 sessionTitle: 'The practice can be brief enough to fit inside an ordinary conversation.',
 session: [
 'Morgan may invite a short pause to notice a reaction, breath, sensation, or thought and then return to the topic being discussed.',
 'These small moments can make automatic responses easier to recognize before they determine the rest of the interaction.',
 ],
 considerationsTitle: 'Mindfulness is a tool, not a personality type.',
 considerations: [
 'No meditation background is required.',
 'Practices can be short and practical.',
 'Mindfulness can be combined with other approaches rather than used on its own.',
 ],
 related: [
 { label: 'Anxiety & Stress', href: '/services/anxiety-stress/' },
 { label: 'Life Transitions', href: '/services/life-transitions/' },
 { label: 'Meet Morgan', href: '/about/morgan-hale/' },
 ],
 },
];
