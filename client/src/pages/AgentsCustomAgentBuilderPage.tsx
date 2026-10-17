import type { ReactNode } from 'react';
import { ArrowLeft, Clock, ExternalLink, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import articlePayloadRaw from '@assets/tread-custom-agent-article-2099421620968513813.json?raw';
import coverImage from '@assets/tread-agent-cover.png';
import image2099163730202517505 from '@assets/tread-agent-2099163730202517505.jpg';
import image2099164644535578624 from '@assets/tread-agent-2099164644535578624.jpg';
import image2099163947576578049 from '@assets/tread-agent-2099163947576578049.png';
import image2099162806864257024 from '@assets/tread-agent-2099162806864257024.jpg';
import image2099166143084965888 from '@assets/tread-agent-2099166143084965888.jpg';
import image2099163845818454017 from '@assets/tread-agent-2099163845818454017.jpg';
import image2099164091864735744 from '@assets/tread-agent-2099164091864735744.jpg';
import image2099163481597685760 from '@assets/tread-agent-2099163481597685760.jpg';
import image2099163011466571776 from '@assets/tread-agent-2099163011466571776.jpg';
import image2099166347729195008 from '@assets/tread-agent-2099166347729195008.jpg';
import image2099165322138017792 from '@assets/tread-agent-2099165322138017792.jpg';
import image2099164813381476352 from '@assets/tread-agent-2099164813381476352.jpg';
import image2099165195017072642 from '@assets/tread-agent-2099165195017072642.jpg';
import image2099166038126710784 from '@assets/tread-agent-2099166038126710784.jpg';

type TextRange = {
  key?: number;
  offset: number;
  length: number;
  style?: string;
};

type ArticleBlock = {
  key: string;
  text: string;
  type: 'unstyled' | 'header-two' | 'unordered-list-item' | 'blockquote' | 'atomic';
  entityRanges?: TextRange[];
  inlineStyleRanges?: TextRange[];
};

type ArticleEntity = {
  key: string;
  value: {
    type: string;
    data?: {
      url?: string;
      tweetId?: string;
      caption?: string;
      mediaItems?: Array<{ mediaId: string }>;
    };
  };
};

export type ArticlePayload = {
  tweet: {
    article: {
      title: string;
      content: {
        blocks: ArticleBlock[];
        entityMap: ArticleEntity[];
      };
    };
  };
};

const articlePayload = JSON.parse(articlePayloadRaw) as ArticlePayload;

const mediaById: Record<string, string> = {
  '2099163730202517505': image2099163730202517505,
  '2099164644535578624': image2099164644535578624,
  '2099163947576578049': image2099163947576578049,
  '2099162806864257024': image2099162806864257024,
  '2099166143084965888': image2099166143084965888,
  '2099163845818454017': image2099163845818454017,
  '2099164091864735744': image2099164091864735744,
  '2099163481597685760': image2099163481597685760,
  '2099163011466571776': image2099163011466571776,
  '2099166347729195008': image2099166347729195008,
  '2099165322138017792': image2099165322138017792,
  '2099164813381476352': image2099164813381476352,
  '2099165195017072642': image2099165195017072642,
  '2099166038126710784': image2099166038126710784,
};

type EntityMap = Record<number, ArticleEntity['value']>;

function renderInline(block: ArticleBlock, entityByKey: EntityMap): ReactNode {
  if (!block.text) return null;

  const plainUrls = Array.from(block.text.matchAll(/https?:\/\/[^\s]+/g));
  const entityRanges = [...(block.entityRanges ?? [])];
  const inlineEntities = { ...entityByKey };
  plainUrls.forEach((match, index) => {
    const offset = match.index!;
    if (entityRanges.some((range) => offset >= range.offset && offset < range.offset + range.length)) return;
    const key = -index - 1;
    entityRanges.push({ key, offset, length: match[0].length });
    inlineEntities[key] = { type: 'LINK', data: { url: match[0] } };
  });

  const boundaries = new Set([0, block.text.length]);
  for (const range of [...entityRanges, ...(block.inlineStyleRanges ?? [])]) {
    boundaries.add(range.offset);
    boundaries.add(range.offset + range.length);
  }

  const points = Array.from(boundaries).sort((a, b) => a - b);

  return points.slice(0, -1).map((start, index) => {
    const end = points[index + 1];
    const text = block.text.slice(start, end);
    const styles = (block.inlineStyleRanges ?? []).filter(
      (range) => start >= range.offset && end <= range.offset + range.length,
    );
    const entityRange = entityRanges.find(
      (range) => start >= range.offset && end <= range.offset + range.length,
    );
    const entity = entityRange?.key === undefined ? undefined : inlineEntities[entityRange.key];

    let node: ReactNode = text;

    if (styles.some((style) => style.style === 'Bold')) {
      node = <strong className="font-semibold text-foreground">{node}</strong>;
    }
    if (styles.some((style) => style.style === 'Italic')) {
      node = <em>{node}</em>;
    }

    const href = entity?.data?.url
      ?? (entity?.data?.tweetId ? `https://x.com/i/status/${entity.data.tweetId}` : undefined);

    if (href) {
      node = (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-words text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          {node}
        </a>
      );
    }

    return <span key={`${block.key}-${start}`}>{node}</span>;
  });
}

function ArticleMedia({ block, entityByKey, mediaById }: {
  block: ArticleBlock;
  entityByKey: EntityMap;
  mediaById: Record<string, string>;
}) {
  const entityKey = block.entityRanges?.[0]?.key;
  if (entityKey === undefined) return null;

  const entity = entityByKey[entityKey];
  const mediaId = entity?.data?.mediaItems?.[0]?.mediaId;
  const src = mediaId ? mediaById[mediaId] : undefined;
  const tweetId = entity?.data?.tweetId;

  if (!src && tweetId) {
    return (
      <a
        href={`https://x.com/i/status/${tweetId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="my-8 flex items-center justify-between gap-4 rounded-xl border border-card-border bg-card p-5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <span>View the referenced TreadFi Agents article on X</span>
        <ExternalLink size={15} className="shrink-0 text-primary" />
      </a>
    );
  }

  if (!src) return null;

  return (
    <figure className="my-8">
      <img
        src={src}
        alt={entity?.data?.caption || 'TreadFi agent walkthrough screenshot'}
        className="w-full rounded-xl border border-border/40 object-contain bg-black/20"
        loading="lazy"
      />
      {entity?.data?.caption && (
        <figcaption className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {entity.data.caption}
        </figcaption>
      )}
    </figure>
  );
}

function ArticleBlockView({ block, entityByKey, mediaById }: {
  block: ArticleBlock;
  entityByKey: EntityMap;
  mediaById: Record<string, string>;
}) {
  if (block.type === 'atomic') {
    return <ArticleMedia block={block} entityByKey={entityByKey} mediaById={mediaById} />;
  }

  if (block.type === 'header-two') {
    return (
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-14 mb-6 leading-tight">
        {renderInline(block, entityByKey)}
      </h2>
    );
  }

  if (block.type === 'unordered-list-item') {
    return (
      <ul className="list-disc pl-6 mb-3 text-muted-foreground">
        <li className="pl-1 leading-relaxed">{renderInline(block, entityByKey)}</li>
      </ul>
    );
  }

  if (block.type === 'blockquote') {
    return (
      <blockquote className="my-8 border-l-4 border-primary/70 bg-card rounded-r-xl p-6 text-muted-foreground leading-relaxed whitespace-pre-wrap">
        {renderInline(block, entityByKey)}
      </blockquote>
    );
  }

  if (!block.text.trim()) {
    return <div className="h-3" aria-hidden="true" />;
  }

  return (
    <p className="text-muted-foreground leading-relaxed mb-5 whitespace-pre-wrap">
      {renderInline(block, entityByKey)}
    </p>
  );
}

export function AgentsArticlePage({ payload, mediaById, coverImage, readTime, sourceUrl }: {
  payload: ArticlePayload;
  mediaById: Record<string, string>;
  coverImage: string;
  readTime: string;
  sourceUrl: string;
}) {
  const article = payload.tweet.article;
  const entityByKey: EntityMap = Object.fromEntries(
    article.content.entityMap.map((entity) => [Number(entity.key), entity.value]),
  );
  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/agents"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          data-testid="link-back-to-agents"
        >
          <ArrowLeft size={15} />
          Back to Agents
        </Link>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            AI Agents
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>{readTime}</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Custom Agents
            </Badge>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              Original on X
              <ExternalLink size={12} />
            </a>
          </div>
        </header>

        <img
          src={coverImage}
          alt={article.title}
          className="w-full rounded-xl border border-border/40 object-cover mb-12"
        />

        <div className="article-prose">
          {article.content.blocks.map((block) => (
            <ArticleBlockView key={block.key} block={block} entityByKey={entityByKey} mediaById={mediaById} />
          ))}
        </div>
      </article>
    </div>
  );
}

export default function AgentsCustomAgentBuilderPage() {
  return (
    <AgentsArticlePage
      payload={articlePayload}
      mediaById={mediaById}
      coverImage={coverImage}
      readTime="18 min read"
      sourceUrl="https://x.com/sportytechworld/status/2099421620968513813"
    />
  );
}