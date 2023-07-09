import { useRef, useEffect } from 'react';

export interface Size { width: number, height: number }

interface EventProps {
  onSize?: (size: Size) => void;
  slim?: boolean;
  icon: string;
  iconLabel: string;
  title: string;
  subtitle?: string;
}

export const Event = (props: EventProps) => {
  const ref = useRef<HTMLLIElement>(null);

  const { onSize } = props;

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    const height = ref.current ? ref.current.offsetHeight : 0;
    if (onSize) {
      onSize({ width, height });
    }
  });

  return (
    <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
      <button className="event__button">
        <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
        <h4 className="event__title">{props.title}</h4>
        {props.subtitle &&
          <span className="event__subtitle">{props.subtitle}</span>
        }
      </button>
    </li>
  );
}
