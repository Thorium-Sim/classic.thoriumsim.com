import React from 'react'
import { Page } from '../components/styles'
const Download = () => {
  return (
    <div className="outerContainer">
      <Page>
        <h1>Download Thorium</h1>
        <p>
          Thorium builds are created weekly and are freely available to
          download. The standalone client application download links are
          available from within Thorium. Be sure to unzip the program before
          running it.
        </p>
        <ul>
          <li>
            Latest Release{' '}
            <ul>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/thorium-macos.zip">
                  macOS
                </a>
              </li>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/thorium-win.exe.zip">
                  Windows
                </a>
              </li>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/thorium-linux.zip">
                  Linux
                </a>
              </li>
            </ul>
          </li>
          <li>
            Template Simulators<ul>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/simulators/Voyager.sim">
                  Voyager
                </a>
              </li>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/simulators/Vanguard.sim">
                  Vanguard (Jr.)
                </a>
              </li>
            </ul>
          </li>
          <li>
            Template Missions<ul>
              <li>
                <a href="https://s3.amazonaws.com/thoriumsim/missions/Intolerance.misn">
                  Intolerance
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Thorium is Open Source software, and the source code can be downloaded
          and compiled from the{' '}
          <a href="https://github.com/thorium-sim/thorium">code repository</a>.
          Instructions to build Thorium are included in the repository. Assets
          and content can be collected separately from third-parties.
        </p>
        <a href="https://github.com/thorium-sim/thorium" className="button">
          Get the Code
        </a>
      </Page>
    </div>
  )
}
export default Download
