import { FC, useState } from 'react';
import cn from 'classnames';
import { IItem } from '../../types/typesExpander';
import FileIcon from '../../../public/assets/icons/file.svg';
import DirectoryIcon from '../../../public/assets/icons/directory.svg';
import DirectoryExpandedIcon from '../../../public/assets/icons/directory_expanded.svg';
import styles from './Expander.module.scss';

export const Expander: FC<{ item: IItem }> = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const switchExpanded = () => setIsExpanded((prev) => !prev);

  return item.type === 'file' ? (
    <div className={cn(styles.expander, styles.expander_file)}>
      <div className={styles.expander__name}>
        <FileIcon />
        <h4>{item.name}</h4>
      </div>
    </div>
  ) : (
    <div
      className={cn(styles.expander, styles.expander_directory, {
        [styles.expander_directory_expanded]: isExpanded,
        [styles.expander_directory_closed]: !isExpanded,
      })}
    >
      <div className={styles.expander__name} onClick={switchExpanded}>
        {isExpanded ? <DirectoryExpandedIcon /> : <DirectoryIcon />}
        <h4>{item.name}</h4>
      </div>

      {isExpanded &&
        item.children?.map((elem) => <Expander item={elem} key={elem.name} />)}
    </div>
  );
};
