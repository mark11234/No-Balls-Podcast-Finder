import Parser from 'rss-parser';
import { sendNoBallsEmail } from './sendEmail';

const TMS_RSS_FEED_LINK = 'https://podcasts.files.bbci.co.uk/p02nrsl2.rss';
const NO_BALLS_SEARCH_TERM = 'No Balls: The Cricket Podcast';
const CHECK_FREQUENCY_IN_MS = 1000 * 60 * 60 * 24;

const parser = new Parser();

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

const main = async (): Promise<void> => {
  while (true) {  
    (async (): Promise<void> => {
    const feed = await parser.parseURL(TMS_RSS_FEED_LINK);
    
    feed.items.forEach(item => {
      item.title?.includes(NO_BALLS_SEARCH_TERM)
        && new Date().getTime() - Date.parse(item.pubDate?.toString() ?? '' ) <= CHECK_FREQUENCY_IN_MS
        && sendNoBallsEmail(item.title, item.content ?? '');
    });

    })();
    await sleep(CHECK_FREQUENCY_IN_MS);
  }
}
main();