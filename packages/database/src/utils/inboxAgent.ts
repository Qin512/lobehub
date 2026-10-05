import { DEFAULT_INBOX_AVATAR, DEFAULT_INBOX_TITLE, INBOX_SESSION_ID } from '@lobechat/const';

interface InboxAgentIdentity {
  slug?: string | null;
}

interface InboxAgentMeta {
  avatar: string | null;
  name?: string | null;
  title: string | null;
}

const isBlank = (value: string | null | undefined) => !value || value.trim().length === 0;

export const isInboxAgentIdentity = ({ slug }: InboxAgentIdentity) => slug === INBOX_SESSION_ID;

export function normalizeInboxAgentTitle(
  title: string | null,
  identity: InboxAgentIdentity,
): string | null;
export function normalizeInboxAgentTitle(
  title: string | null | undefined,
  identity: InboxAgentIdentity,
): string | null | undefined;
export function normalizeInboxAgentTitle(
  title: string | null | undefined,
  identity: InboxAgentIdentity,
) {
  if (!isInboxAgentIdentity(identity)) return title;

  // Migrate old default "Lobe AI" to new default "Q仔 AI"
  if (title === 'Lobe AI') return DEFAULT_INBOX_TITLE;

  return isBlank(title) ? DEFAULT_INBOX_TITLE : title;
}

export function normalizeInboxAgentAvatar(
  avatar: string | null,
  identity: InboxAgentIdentity,
): string | null;
export function normalizeInboxAgentAvatar(
  avatar: string | null | undefined,
  identity: InboxAgentIdentity,
): string | null | undefined;
export function normalizeInboxAgentAvatar(
  avatar: string | null | undefined,
  identity: InboxAgentIdentity,
) {
  return isInboxAgentIdentity(identity) && isBlank(avatar) ? DEFAULT_INBOX_AVATAR : avatar;
}

export function normalizeInboxAgentName(
  name: string | null | undefined,
  identity: InboxAgentIdentity,
) {
  if (!isInboxAgentIdentity(identity)) return name;

  // Migrate old default "Lobe AI" to new default "Q仔 AI"
  if (name === 'Lobe AI') return DEFAULT_INBOX_TITLE;

  return name;
}

export const normalizeInboxAgentMeta = <T extends InboxAgentMeta>(
  agent: T,
  identity: InboxAgentIdentity = agent as T & InboxAgentIdentity,
): T => ({
  ...agent,
  avatar: normalizeInboxAgentAvatar(agent.avatar, identity),
  name: normalizeInboxAgentName(agent.name, identity),
  title: normalizeInboxAgentTitle(agent.title, identity),
});
