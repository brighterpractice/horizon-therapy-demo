import type { ServicePageContent } from './service-pages';

export const horizonServicePages: Record<string, ServicePageContent> = {
  'individual-therapy': {
    title: 'Individual Therapy in Bozeman, Montana',
    description: 'Individual counseling with Morgan Hale, LPC, for adults in Bozeman, Montana.',
    hero: 'A place to step out of the rush, widen the view, and decide what deserves your attention next.',
    leadTitle: 'Perspective can change when you are not trying to solve everything at once.',
    lead: [
      'People come to therapy for all kinds of reasons: a specific problem, a difficult season, a repeating pattern, or simply the sense that life no longer feels aligned with where they want to be.',
      'Individual counseling offers dedicated time to look at the terrain you are in now, understand what has shaped it, and decide which direction feels worth moving toward.',
    ],
    experiencesTitle: 'You may be navigating',
    experiences: [
      'Persistent stress or worry that narrows your attention',
      'The aftermath of difficult or overwhelming experiences',
      'Loss, change, or an uncertain transition',
      'Relationship patterns that keep pulling you off course',
      'Low mood, disconnection, or loss of momentum',
      'Questions about identity, values, purpose, or direction',
    ],
    approachTitle: 'The work can be reflective without losing sight of real life.',
    approach: [
      'Morgan may draw from several approaches while keeping the conversation connected to what you want to understand, change, accept, or make room for.',
      'Sessions can include noticing patterns, exploring emotional and physical responses, clarifying values, and identifying practical next steps when they are useful.',
    ],
    related: [
      { slug: 'life-transitions', label: 'Life Transitions' },
      { slug: 'anxiety-stress', label: 'Anxiety & Stress' },
    ],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'trauma-ptsd': {
    title: 'Trauma Therapy in Bozeman, Montana',
    description: 'Individual trauma counseling with Morgan Hale, LPC, in Bozeman, Montana.',
    hero: 'Difficult experiences can change the way the world feels long after the danger itself has passed.',
    leadTitle: 'Your sense of safety may need time to catch up with the present.',
    lead: [
      'Trauma can leave people feeling watchful, disconnected, easily overwhelmed, or unable to relax into situations that used to feel ordinary.',
      'Therapy can begin with present-day effects rather than a complete retelling of the past. The goal is to understand what still feels active and build enough steadiness to choose how to approach it.',
    ],
    experiencesTitle: 'You may be living with',
    experiences: [
      'A sense of being on guard even in safe settings',
      'Avoidance of reminders, conversations, or situations',
      'Memories or body reactions that feel suddenly close',
      'Numbness, distance, or difficulty staying present',
      'Changes in trust, confidence, or connection',
      'A nervous system that seems to stay ready for impact',
    ],
    approachTitle: 'The path does not have to be fast to be meaningful.',
    approach: [
      'Morgan may focus first on what helps you stay oriented to the present and regain a sense of choice when reactions become intense.',
      'IFS concepts, body-informed practices, mindfulness, or other approaches may be used when they fit. The work can slow down, change direction, or pause when needed.',
    ],
    related: [{ slug: 'anxiety-stress', label: 'Anxiety & Stress' }],
    approachLinks: [
      { href: '/approaches/internal-family-systems/', label: 'Internal Family Systems' },
      { href: '/approaches/somatic-experiencing/', label: 'Somatic & body-informed therapy' },
    ],
  },

  'anxiety-stress': {
    title: 'Anxiety & Stress Therapy in Bozeman, Montana',
    description: 'Counseling in Bozeman for adults dealing with anxiety, chronic stress, worry, pressure, and overwhelm.',
    hero: 'When every horizon seems filled with the next problem to anticipate, it can be hard to experience the ground you are already standing on.',
    leadTitle: 'Anxiety can shrink a wide world into a very narrow set of possibilities.',
    lead: [
      'Worry can keep attention fixed on what might happen next, while stress keeps the body ready to respond long after the immediate demand is gone.',
      'Counseling can help you notice how the cycle works, what keeps it moving, and what creates enough space to respond instead of automatically bracing for the next thing.',
    ],
    experiencesTitle: 'The pattern may include',
    experiences: [
      'Thinking several steps ahead of every situation',
      'Tension, restlessness, irritability, or poor sleep',
      'Difficulty enjoying downtime without feeling behind',
      'Perfectionism or fear of making the wrong choice',
      'Avoidance when a decision feels too uncertain',
      'Physical activation that seems difficult to switch off',
    ],
    approachTitle: 'Widen the space between uncertainty and reaction.',
    approach: [
      'Morgan may help you identify triggers, assumptions, habits, and body cues that make anxiety feel self-sustaining.',
      'The work can include practical strategies as well as exploration of earlier experiences or relationship patterns when they continue to shape how uncertainty feels now.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'grief-loss': {
    title: 'Grief & Loss Counseling in Bozeman, Montana',
    description: 'Individual counseling for grief, loss, and major endings in Bozeman, Montana.',
    hero: 'Loss can change the landscape of a life even when everything around you looks familiar.',
    leadTitle: 'Grief can alter your sense of time, identity, and direction.',
    lead: [
      'A death, relationship ending, health change, lost role, move, or future that no longer exists can affect far more than one part of the day.',
      'Counseling offers space to acknowledge what changed, what remains, and what it is like to keep moving through a world that may feel different now.',
    ],
    experiencesTitle: 'Grief may bring',
    experiences: [
      'Sadness, anger, guilt, relief, numbness, or mixed emotions',
      'Difficulty concentrating or keeping up with ordinary routines',
      'A sense that other people have moved on faster than you have',
      'Changes in sleep, energy, appetite, or motivation',
      'Questions about meaning, identity, or future plans',
      'Strong reactions around anniversaries, places, or reminders',
    ],
    approachTitle: 'There is no single route through loss.',
    approach: [
      'Morgan may help you make room for grief as it actually appears rather than asking it to follow a fixed sequence.',
      'The work can include memory, adjustment, relationships, identity, and the practical question of how to keep living while still honoring what mattered.',
    ],
    related: [{ slug: 'life-transitions', label: 'Life Transitions' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'depression-emotional-disconnection': {
    title: 'Depression & Emotional Disconnection | Bozeman, MT',
    description: 'Counseling in Bozeman for adults dealing with low mood, shutdown, numbness, and emotional disconnection.',
    hero: 'Sometimes the world is still moving around you while your own sense of movement has gone quiet.',
    leadTitle: 'Feeling stuck can look like distance, exhaustion, or simply not caring the way you used to.',
    lead: [
      'Disconnection may show up as low energy, withdrawal, irritability, numbness, reduced interest, or the sense that you are watching your own life from farther away than you want to be.',
      'Therapy can help you look at what has become heavy, what has gone quiet, and where even small signs of connection or momentum still exist.',
    ],
    experiencesTitle: 'You may notice',
    experiences: [
      'Low energy or difficulty getting started',
      'Less interest in people, activities, or future plans',
      'Withdrawal or a sense of emotional distance',
      'Self-criticism that makes effort feel pointless',
      'Trouble concentrating or maintaining routines',
      'Wanting something to change without knowing where to begin',
    ],
    approachTitle: 'Look for a direction before demanding a destination.',
    approach: [
      'Morgan may help you understand patterns around withdrawal, pressure, grief, exhaustion, or protective shutdown.',
      'The work may focus on small ways to reconnect with relationships, values, routines, or interests without turning progress into another standard you have to fail.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'chronic-pain-chronic-illness': {
    title: 'Chronic Pain & Illness Counseling | Bozeman, MT',
    description: 'Counseling for the emotional, relational, and practical impact of chronic pain and chronic illness in Bozeman, Montana.',
    hero: 'When health changes the route, the rest of life often has to change with it.',
    leadTitle: 'Ongoing symptoms can reshape roles, plans, independence, and expectations.',
    lead: [
      'Living with chronic pain or illness can mean continually recalculating what the day allows, what others expect, and what you expect from yourself.',
      'Counseling does not treat the medical condition. It offers support for the grief, uncertainty, relationship strain, identity changes, and practical adjustment that can come with it.',
    ],
    experiencesTitle: 'You may be navigating',
    experiences: [
      'Grief around changing abilities or plans',
      'Uncertainty about symptoms, treatment, or the future',
      'Frustration with limits that other people cannot see',
      'Changes in work, caregiving, intimacy, or family roles',
      'Guilt about rest, help, or changing expectations',
      'The effort of balancing activity, recovery, and what still matters',
    ],
    approachTitle: 'A changed route can still hold meaning, connection, and choice.',
    approach: [
      'Morgan may help you work with adjustment, boundaries, communication, grief, and the parts of identity that feel most affected by changing health.',
      'Therapy supports the lived experience of the condition while medical concerns remain with appropriate healthcare professionals.',
    ],
    wholePersonTitle: 'Counseling supports the life around the condition.',
    wholePerson: [
      'The focus is not on explaining symptoms psychologically. It is on giving the emotional and relational consequences of living with them a place to be addressed.',
    ],
    related: [
      { slug: 'grief-loss', label: 'Grief & Loss' },
      { slug: 'life-transitions', label: 'Life Transitions' },
    ],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'life-transitions': {
    title: 'Life Transitions Counseling | Bozeman, MT',
    description: 'Counseling in Bozeman for changes in identity, work, relationships, family roles, health, and direction.',
    hero: 'A transition can feel like standing between a familiar trail and one you have not learned to read yet.',
    leadTitle: 'Change can be right and still feel disorienting.',
    lead: [
      'A move, relationship shift, career change, caregiving role, health change, retirement, or new stage of family life can unsettle routines and identities that once felt dependable.',
      'Therapy can help you understand what you are leaving behind, what you want to carry forward, and what the next season is asking from you.',
    ],
    experiencesTitle: 'Transitions may involve',
    experiences: [
      'A changing sense of identity or purpose',
      'Mixed relief, grief, excitement, or uncertainty',
      'New responsibilities or changing family roles',
      'A move or change in community and support',
      'Health, aging, or changes in ability',
      'A decision that has no obviously perfect answer',
    ],
    approachTitle: 'Use the transition to get clearer about what belongs in the next chapter.',
    approach: [
      'Morgan may help you separate practical decisions from emotional reactions and notice which values you want to use as a compass.',
      'The work can also explore how earlier experiences influence change, uncertainty, and the pull to stay with what is familiar.',
    ],
    related: [{ slug: 'grief-loss', label: 'Grief & Loss' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'relationship-concerns': {
    title: 'Relationship Concerns | Bozeman, MT',
    description: 'Individual counseling for relationship patterns, boundaries, communication, trust, and conflict in Bozeman, Montana.',
    hero: 'Relationships can become familiar terrain even when the route through them keeps leading somewhere you do not want to go.',
    leadTitle: 'Recurring patterns are easier to change when you can see where they begin.',
    lead: [
      'You may notice the same conflict, withdrawal, people-pleasing, distance, or fear appearing across different relationships or returning again and again in one important connection.',
      'Individual therapy offers space to understand your own reactions, needs, assumptions, and choices without requiring another person to be in the room.',
    ],
    experiencesTitle: 'You may want to explore',
    experiences: [
      'Communication that breaks down in familiar ways',
      'Difficulty expressing needs or holding boundaries',
      'Trust, closeness, vulnerability, or emotional distance',
      'Conflict that seems to escalate before you understand why',
      'How earlier relationships shape current expectations',
      'A decision about whether to repair, change, or leave',
    ],
    approachTitle: 'Understand your position in the pattern before deciding where to go next.',
    approach: [
      'Morgan may help you slow down the sequence around conflict or disconnection and notice the emotions, assumptions, and protective responses underneath it.',
      'This is individual counseling rather than couples therapy. The goal is greater clarity about your own experience and choices, not assigning blame.',
    ],
    related: [{ slug: 'individual-therapy', label: 'Individual Therapy' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },

  'self-esteem-personal-growth': {
    title: 'Self-Esteem & Personal Growth | Bozeman, MT',
    description: 'Counseling for self-trust, confidence, boundaries, values, and personal growth in Bozeman, Montana.',
    hero: 'Growth can be less about becoming someone new and more about getting clearer about the life you want to inhabit.',
    leadTitle: 'A wider perspective can reveal choices that were hard to see from inside an old pattern.',
    lead: [
      'You may want to trust your own judgment more, change a long-standing habit, strengthen boundaries, or make decisions that better reflect your values.',
      'Therapy can help you examine the expectations you have been living under and decide which ones still belong in the direction you want to go.',
    ],
    experiencesTitle: 'You may be working toward',
    experiences: [
      'More confidence in your own decisions',
      'Boundaries that match your values',
      'Less comparison and self-criticism',
      'A clearer sense of identity or direction',
      'Understanding patterns that keep limiting your choices',
      'A more deliberate relationship with work, relationships, or time',
    ],
    approachTitle: 'Choose direction from values rather than pressure.',
    approach: [
      'Morgan may help you identify the standards, fears, and expectations shaping your choices and consider which ones are still useful.',
      'The work can include reflection, practical experiments, relationship patterns, and the question of what a more intentional life would actually look like day to day.',
    ],
    related: [{ slug: 'relationship-concerns', label: 'Relationship Concerns' }],
    approachLinks: [{ href: '/approaches/', label: 'Explore therapy approaches' }],
  },
};
