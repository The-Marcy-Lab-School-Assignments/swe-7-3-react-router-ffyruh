// This component is shown at /robots/${id}
// TODO:
// 1. pull the id value from the URL
// 2. make state for fetching the robot (and the error)
// 3. use the getRobotById adapter in useEffect, re-fetching each time the id changes
// 4. Update the rendered component to include the fetched robot's data
//     - img alt
//     - img src
//     - name
//     - catchphrase
//     - robot class ("Assault", "Defender", or "Support")
//     - robot class Icon
//     - health
//     - damage
//     - armor
// 5. if an error occurs, render <CouldNotLoadData /> instead
// 6. if no robot is found, render <NotFoundPage /> instead

import NotFoundPage from '../pages/NotFoundPage';
import CouldNotLoadData from './CouldNotLoadData';
import BotClassIcon from './BotClassIcon';
import { getRobotById } from '../adapters/robotAdapters';
import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const BotSpecs = () => {
  const [errFlag, setErrFlag] = useState(null);
  const [robot, setRobot] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchRobotData = async () => {
      const [data, error] = await getRobotById(id);
      if (error) {
        if (error instanceof TypeError) setErrFlag('could-not-load');
        else setErrFlag('not-found');
      }
      if (data) setRobot(data);
      setLoading(false);
    }
    fetchRobotData();
  }, [id]);

  if (loading) return <div>loading...</div>
  if (errFlag) {
    if (errFlag === 'could-not-load') return <CouldNotLoadData />;
    if (errFlag === 'not-found') return <NotFoundPage />;
  }
  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt={`${robot["name"]}'s Avatar`}
              className="ui medium circular image bordered"
              src={robot["avatar_url"]}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {robot["name"]}</h2>
            <p>
              <strong>Catchphrase: </strong>
              {robot["catchphrase"]}
            </p>
            <strong>
              Class: {robot["bot_class"]} {BotClassIcon(robot["bot_class"])}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{robot["health"]}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{robot["damage"]}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{robot["armor"]}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BotSpecs;
