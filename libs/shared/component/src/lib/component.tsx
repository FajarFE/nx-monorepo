import styles from './component.module.css';

/* eslint-disable-next-line */
export interface ComponentProps {
  title: string;
  img: string;
  className: string;
}

export function Component(props: ComponentProps) {
  const { title, img, className } = props;
  return (
    <div className={`${className}`}>
      <p>{title}</p>
      <img src={img} alt={title} />
    </div>
  );
}

export default Component;
