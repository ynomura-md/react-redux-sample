import React, { PropTypes, Component} from 'react'
import {AppBar, IconButton} from 'material-ui'
import FaceIcon from 'material-ui/svg-icons/action/face'

class Header extends Component {
  render() {
    return (
      <header className="header">
				<AppBar
					title="Rewarded Ad"
					iconElementRight={
						<IconButton>
							<FaceIcon />
						</IconButton>
					}
					showMenuIconButton={false}
				/>
      </header>
    )
  }
}

export default Header
