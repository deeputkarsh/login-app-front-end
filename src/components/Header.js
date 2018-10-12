import React, { Component } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { defaultNavItems } from '../json/headerJson';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false,
			defaultNavItems
		};
	}

	toggle(value) {
		value.dropdownOpen = !value.dropdownOpen;
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}

	getNavItems(itemList) {
		return itemList.map((value,index)=>{
			let returnHtm = null;
			if (value.type === 'dropdown') {
				returnHtm = (
					<Dropdown key={`nav-items-${value.text}-${index}`} nav isOpen={value.dropdownOpen} toggle={()=>this.toggle(value)}>
						<DropdownToggle nav caret>{value.text}</DropdownToggle>
						<DropdownMenu>
							{value.dropdownItems.map((value,index)=>{
								return (
									<DropdownItem key={`nav-drop-${value.text}-${index}`} {...value.attr}>{value.text}</DropdownItem>
								);
							})}
						</DropdownMenu>
					</Dropdown>
				);
			} else {
				let navAttr = {
					href: `#${value.href}`
				};
				navAttr.active = this.props.currentRoute === value.href;
				returnHtm = (
					<NavItem key={`nav-items-${value.text}-${index}`}>
						<NavLink {...navAttr}>{value.text}</NavLink>
					</NavItem>
				);
			}
			return returnHtm;
		});
	}

	render(){
		return (
			<div className="site-header">
				<Nav tabs>
					{this.getNavItems(this.state.defaultNavItems)}
				</Nav>
			</div>
		);
	}
}

/*<NavItem>
	<NavLink href="#" active>Link</NavLink>
</NavItem>
<Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
	<DropdownToggle nav caret>
	Dropdown
	</DropdownToggle>
	<DropdownMenu>
		<DropdownItem header>Header</DropdownItem>
		<DropdownItem disabled>Action</DropdownItem>
		<DropdownItem>Another Action</DropdownItem>
		<DropdownItem divider />
		<DropdownItem>Another Action</DropdownItem>
	</DropdownMenu>
</Dropdown>
<NavItem>
	<NavLink href="#">Link</NavLink>
</NavItem>
<NavItem>
	<NavLink href="#">Another Link</NavLink>
</NavItem>
<NavItem>
	<NavLink disabled href="#">Disabled Link</NavLink>
</NavItem>*/