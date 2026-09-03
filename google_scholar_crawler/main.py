from scholarly import scholarly, ProxyGenerator
import json
from datetime import datetime
import os

scraper_api_key = os.environ.get('SCRAPER_API_KEY')
if scraper_api_key:
    proxy_generator = ProxyGenerator()
    if not proxy_generator.ScraperAPI(scraper_api_key):
        raise RuntimeError('Failed to configure ScraperAPI; check SCRAPER_API_KEY.')
    scholarly.use_proxy(proxy_generator, proxy_generator)

author: dict = scholarly.search_author_id(os.environ['GOOGLE_SCHOLAR_ID'])
scholarly.fill(author, sections=['basics', 'indices', 'counts', 'publications'])
author['updated'] = str(datetime.now())
author['publications'] = {v['author_pub_id']:v for v in author['publications']}
print(json.dumps(author, indent=2))
os.makedirs('results', exist_ok=True)
with open('results/gs_data.json', 'w') as outfile:
    json.dump(author, outfile, ensure_ascii=False)

shieldio_data = {
  "schemaVersion": 1,
  "label": "citations",
  "message": f"{author['citedby']}",
}
with open('results/gs_data_shieldsio.json', 'w') as outfile:
    json.dump(shieldio_data, outfile, ensure_ascii=False)
