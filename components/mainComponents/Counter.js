import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

export default function Counters() {
  return (
    <div className="container flex justify-center space-x-3">
      <div className="flex flex-col text-center">
        <h2 className="text-3xl -mb-2">
          <CountUp end={24} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h2>
        <p className="text-xs leading-tight">Hours a day</p>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl -mb-2">
          <CountUp end={7} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h2>
        <p className="text-xs leading-tight">Subscribers</p>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl -mb-2">
          <CountUp end={365} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h2>
        <p className="text-xs leading-tight">Days a week</p>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl -mb-2">
          <CountUp end={110} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <span>k</span>
        </h2>
        <p className="text-xs leading-tight">Satisfied Clients</p>
      </div>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl -mb-2">
          <CountUp end={12} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
        </h2>
        <p className="text-xs leading-tight">Years in business</p>
      </div>
    </div>
  )
}
