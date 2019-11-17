import { PullRequest } from "../pull-request/types";

export function serializeLabelFromPrs(prs: PullRequest[]) {
  return prs.reduce((acc: any, current: PullRequest) => {
    const { labels } = current.node;

    labels.edges.forEach(label => {
      const { node } = label;
      acc[node.id] = { ...node };
    });

    return acc;
  }, {});
}
