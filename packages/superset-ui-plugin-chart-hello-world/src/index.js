import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import buildQuery from './buildQuery';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  credits: null,
  description: '',
  name: t('Hello World!'),
  thumbnail,
});

export default class WordCloudChartPlugin extends ChartPlugin {
  constructor() {
    super({
      buildQuery,
      loadChart: () => import('./ReactHelloWorld'),
      metadata,
      useLegacyApi: false,
      transformProps,
    });
  }
}
