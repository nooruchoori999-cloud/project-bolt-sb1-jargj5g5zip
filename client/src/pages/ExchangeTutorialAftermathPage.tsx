import type { ReactNode } from 'react';
import { ArrowLeft, Clock, ExternalLink, Tag } from 'lucide-react';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import articlePayloadRaw from '@assets/exchange-tutorial-aftermath-2048357644562530543.json?raw';
import coverImage from '@assets/exchange-aftermath-cover.jpg';
import image2048352614367256576 from '@assets/exchange-aftermath-2048352614367256576.jpg';
import image2048350225870561280 from '@assets/exchange-aftermath-2048350225870561280.jpg';
import image2048351191621656576 from '@assets/exchange-aftermath-2048351191621656576.jpg';
import image2048351841105387520 from '@assets/exchange-aftermath-2048351841105387520.jpg';
import image2048352069904744448 from '@assets/exchange-aftermath-2048352069904744448.jpg';
import image2048346760993796096 from '@assets/exchange-aftermath-2048346760993796096.png';
import image2048348630835437568 from '@assets/exchange-aftermath-2048348630835437568.jpg';
import image2048352177023008768 from '@assets/exchange-aftermath-2048352177023008768.jpg';
import image2048348097781354497 from '@assets/exchange-aftermath-2048348097781354497.jpg';
import image2048349566140035074 from '@assets/exchange-aftermath-2048349566140035074.jpg';
import image2048350608516845568 from '@assets/exchange-aftermath-2048350608516845568.png';
import image2048350925908221952 from '@assets/exchange-aftermath-2048350925908221952.png';
import image2048348247819980800 from '@assets/exchange-aftermath-2048348247819980800.jpg';

type TextRange = {
  key?: number;
  offset: number;
  length: number;
  style?: string;
};

type ArticleBlock = {
  key: string;
  text: string;
  type: 'unstyled' | 'header-two' | 'unordered-list-item' | 'ordered-list-item' | 'blockquote' | 'atomic';
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
      mediaItems?: Array<{ mediaId: string }>;
    };
  };
};

type ArticlePayload = {
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
const article = articlePayload.tweet.article;

const mediaById: Record<string, string> = {
  '2048352614367256576': image2048352614367256576,
  '2048350225870561280': image2048350225870561280,
  '2048351191621656576': image2048351191621656576,
  '2048351841105387520': image2048351841105387520,
  '2048352069904744448': image2048352069904744448,
  '2048346760993796096': image2048346760993796096,
  '2048348630835437568': image2048348630835437568,
  '2048352177023008768': image2048352177023008768,
  '2048348097781354497': image2048348097781354497,
  '2048349566140035074': image2048349566140035074,
  '2048350608516845568': image2048350608516845568,
  '2048350925908221952': image2048350925908221952,
  '2048348247819980800': image2048348247819980800,
};

const entityByKey = Object.fromEntries(
  article.content.entityMap.map((entity) => [Number(entity.key), entity.value]),
);

function renderInline(block: ArticleBlock): ReactNode {
  if (!block.text) return null;

  const boundaries = new Set([0, block.text.length]);
  for (const range of [...(block.entityRanges ?? []), ...(block.inlineStyleRanges ?? [])]) {
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
    const entityRange = (block.entityRanges ?? []).find(
      (range) => start >= range.offset && end <= range.offset + range.length,
    );
    const entity = entityRange?.key === undefined ? undefined : entityByKey[entityRange.key];

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
          className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary"
        >
          {node}
        </a>
      );
    }

    return <span key={`${block.key}-${start}`}>{node}</span>;
  });
}

function ArticleMedia({ block }: { block: ArticleBlock }) {
  const entityKey = block.entityRanges?.[0]?.key;
  if (entityKey === undefined) return null;

  const mediaId = entityByKey[entityKey]?.data?.mediaItems?.[0]?.mediaId;
  const src = mediaId ? mediaById[mediaId] : undefined;
  if (!src) return null;

  return (
    <figure className="my-8">
      <img
        src={src}
        alt="Aftermath and TreadFi tutorial illustration"
        className="w-full rounded-xl border border-border/40 object-contain bg-black/20"
        loading="lazy"
      />
    </figure>
  );
}

function orderedListNumber(blockKey: string) {
  const blockIndex = article.content.blocks.findIndex((block) => block.key === blockKey);
  let number = 1;

  for (let index = blockIndex - 1; index >= 0; index -= 1) {
    if (article.content.blocks[index].type !== 'ordered-list-item') break;
    number += 1;
  }

  return number;
}

function ArticleBlockView({ block }: { block: ArticleBlock }) {
  if (block.type === 'atomic') {
    return <ArticleMedia block={block} />;
  }

  if (block.type === 'header-two') {
    return (
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mt-14 mb-6 leading-tight">
        {renderInline(block)}
      </h2>
    );
  }

  if (block.type === 'unordered-list-item') {
    return (
      <ul className="list-disc pl-6 mb-3 text-muted-foreground">
        <li className="pl-1 leading-relaxed">{renderInline(block)}</li>
      </ul>
    );
  }

  if (block.type === 'ordered-list-item') {
    return (
      <ol start={orderedListNumber(block.key)} className="list-decimal pl-6 mb-3 text-muted-foreground">
        <li className="pl-1 leading-relaxed">{renderInline(block)}</li>
      </ol>
    );
  }

  if (block.type === 'blockquote') {
    return (
      <blockquote className="my-8 border-l-4 border-primary/70 bg-card rounded-r-xl p-6 text-muted-foreground leading-relaxed whitespace-pre-wrap">
        {renderInline(block)}
      </blockquote>
    );
  }

  if (!block.text.trim()) {
    return <div className="h-3" aria-hidden="true" />;
  }

  return (
    <p className="text-muted-foreground leading-relaxed mb-5 whitespace-pre-wrap">
      {renderInline(block)}
    </p>
  );
}

export default function ExchangeTutorialAftermathPage() {
  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/exchange-tutorials"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          data-testid="link-back-to-exchange-tutorials"
        >
          <ArrowLeft size={15} />
          Back to Exchange Tutorials
        </Link>

        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Tag size={14} />
            Exchange Tutorials
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-5 tracking-tight leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock size={13} />
              <span>12 min read</span>
            </div>
            <Badge variant="outline" className="text-xs font-medium text-primary border-primary/30 bg-primary/5">
              Exchange Guide
            </Badge>
            <a
              href="https://x.com/sportytechworld/status/2048357644562530543"
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
          alt="Aftermath and TreadFi guide"
          className="w-full rounded-xl border border-border/40 object-cover mb-12"
        />

        <div className="article-prose">
          {article.content.blocks.map((block) => (
            <ArticleBlockView key={block.key} block={block} />
          ))}
        </div>
      </article>
    </div>
  );
}