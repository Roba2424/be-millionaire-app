export const generateAudienceVotes = (correctOption) => {
  const votes = [0, 0, 0, 0];
  let remainingVotes = 100;

  votes[correctOption] = Math.floor(Math.random() * 41) + 40;
  remainingVotes -= votes[correctOption];

  for (let i = 0; i < votes.length; i++) {
    if (i !== correctOption) {
      const randomVote = Math.floor(Math.random() * remainingVotes);
      votes[i] = randomVote;
      remainingVotes -= randomVote;
    }
  }

  votes[votes.findIndex((v) => v === 0)] += remainingVotes;
  return votes;
};
