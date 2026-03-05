import Image from 'next/image';
import css from '../../pages/projets/ProjectPage.module.scss';
import { DirectusBlock } from '@/constants/types';

export const buildPage = (blocks: DirectusBlock[]) => {
  return blocks.map((block) => {
    switch (block.type) {
      case 'header':
        return <h4 key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />;
      case 'embed':
        return (
          <div key={block.id} className={css.iframeHolder}>
            <iframe
              src={`${block.data.embed}&rel=0&loop=1`}
              title="YouTube Video Player"
              allow="autoplay; clipboard-write; encrypted-media; "
              allowFullScreen
            />
          </div>
        );
      case 'image':
        return (
          <figure
            key={block.id}
            className={block.data.stretched ? css.fullwidthImg : css.containerImg}
          >
            <Image
              src={`${process.env.api}${block.data.file.url}`}
              width={block.data.file.width || 1000}
              height={block.data.file.height || 540}
              alt={''}
            />
            {block.data.caption && !block.data.stretched ? (
              <figcaption dangerouslySetInnerHTML={{ __html: block.data.caption }} />
            ) : (
              ''
            )}
          </figure>
        );

      case 'nestedlist':
        if (block.data.style === 'ordered') {
          return (
            <ol key={block.id}>
              {block.data.items.map((i: { content: string; items: any[] }, key: number) => (
                <li key={`${block.id}-${key}`}>{i.content}</li>
              ))}
            </ol>
          );
        } else {
          return (
            <ul key={block.id}>
              {block.data.items.map((i: { content: string; items: any[] }, key: number) => (
                <li key={`${block.id}-${key}`}>{i.content}</li>
              ))}
            </ul>
          );
        }

      default: // "paragraph"
        return (
          <p
            key={block.id}
            className={css.textBlock}
            dangerouslySetInnerHTML={{ __html: block.data.text }}
          />
        );
    }
  });
};
