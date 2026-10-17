import { AgentsArticlePage, type ArticlePayload } from './AgentsCustomAgentBuilderPage';
import articleRaw from '@assets/tread-arcus-agent-article-2110749270915908048.json?raw';
import coverImage from '@assets/tread-arcus-agent-2099081545294426112.jpg';
import image01 from '@assets/tread-arcus-agent-2099074044591263744.jpg';
import image02 from '@assets/tread-arcus-agent-2099074477649018880.jpg';
import image03 from '@assets/tread-arcus-agent-2099075228156780544.jpg';
import image04 from '@assets/tread-arcus-agent-2099075316681699328.jpg';
import image05 from '@assets/tread-arcus-agent-2099075965385338880.jpg';
import image06 from '@assets/tread-arcus-agent-2099078165708832768.jpg';
import image07 from '@assets/tread-arcus-agent-2099078458370609152.jpg';
import image08 from '@assets/tread-arcus-agent-2099078539542949888.jpg';
import image09 from '@assets/tread-arcus-agent-2099078620400771073.jpg';
import image10 from '@assets/tread-arcus-agent-2099078768866582528.jpg';
import image11 from '@assets/tread-arcus-agent-2099078882167300096.jpg';
import image12 from '@assets/tread-arcus-agent-2099079255875530752.jpg';

const payload = JSON.parse(articleRaw) as ArticlePayload;
const mediaById = {
  '2099074044591263744': image01,
  '2099074477649018880': image02,
  '2099075228156780544': image03,
  '2099075316681699328': image04,
  '2099075965385338880': image05,
  '2099078165708832768': image06,
  '2099078458370609152': image07,
  '2099078539542949888': image08,
  '2099078620400771073': image09,
  '2099078768866582528': image10,
  '2099078882167300096': image11,
  '2099079255875530752': image12,
};

export default function AgentsArcusMarketMakingPage() {
  return (
    <AgentsArticlePage
      payload={payload}
      mediaById={mediaById}
      coverImage={coverImage}
      readTime="6 min read"
      sourceUrl="https://x.com/sportytechworld/status/2110749270915908048"
    />
  );
}
