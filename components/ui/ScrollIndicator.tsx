import './scroll.scss';

export default function ScrollIndicator() {
  return (
    <div className='top-scroll-wrapper mt-20'>
      <div className='top-scroll-text'>
        <span className='top-scroll-txtIn'>scroll</span>
      </div>
      <div className='top-scroll-line'>
        <div className='top-scroll-line-in'></div>
      </div>
    </div>
  );
}