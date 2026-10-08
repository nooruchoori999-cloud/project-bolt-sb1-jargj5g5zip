import { AgentsArticlePage, type ArticlePayload } from './AgentsCustomAgentBuilderPage';
import articleRaw from '@assets/tread-mm-agent-article-2107760576445448466.json?raw';
import coverImage from '@assets/tread-mm-agent-2106692338680799232.jpg';
import image01 from '@assets/tread-mm-agent-2106685143721426944.jpg';
import image02 from '@assets/tread-mm-agent-2106685223924846593.jpg';
import image03 from '@assets/tread-mm-agent-2106686440482689024.jpg';
import image04 from '@assets/tread-mm-agent-2106686605536964608.jpg';
import image05 from '@assets/tread-mm-agent-2106686763939053568.jpg';
import image06 from '@assets/tread-mm-agent-2106686894197334016.jpg';
import image07 from '@assets/tread-mm-agent-2106687067904434176.jpg';
import image08 from '@assets/tread-mm-agent-2106687281184784384.jpg';
import image09 from '@assets/tread-mm-agent-2106687371404316672.jpg';
import image10 from '@assets/tread-mm-agent-2106689136287703040.png';
import image11 from '@assets/tread-mm-agent-2106690045646389249.jpg';
import image12 from '@assets/tread-mm-agent-2107759500237389824.png';
import image13 from '@assets/tread-mm-agent-2106691120805896192.jpg';

const payload = JSON.parse(articleRaw) as ArticlePayload;
const mediaById = {
  '2106685143721426944': image01,
  '2106685223924846593': image02,
  '2106686440482689024': image03,
  '2106686605536964608': image04,
  '2106686763939053568': image05,
  '2106686894197334016': image06,
  '2106687067904434176': image07,
  '2106687281184784384': image08,
  '2106687371404316672': image09,
  '2106689136287703040': image10,
  '2106690045646389249': image11,
  '2107759500237389824': image12,
  '2106691120805896192': image13,
};

export default function AgentsMarketMakingPage() {
  return (
    <AgentsArticlePage
      payload={payload}
      mediaById={mediaById}
      coverImage={coverImage}
      readTime="9 min read"
      sourceUrl="https://x.com/sportytechworld/status/2107760576445448466"
    />
  );
}
