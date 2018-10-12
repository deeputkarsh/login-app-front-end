const defaultNavItems = [
	{
		text : 'Home',
		href : '/'
	} , {
		text : 'Sign Up',
		href : '/signup'
	} , {
		text : 'Log In',
		href : '/login'
	} , {
		text : 'Social',
		href : '/social'
	} , {
		text : 'My Account',
		type : 'dropdown',
		dropdownOpen : false,
		dropdownItems : [
			{
				text : 'Utkarsh',
				attr : {
					header : true
				}
			} , {
				text : 'Edit Profile'
			} , {
				attr : {
					divider : true
				}
			} , {
				text : 'Log Out'
			}
		]
	}
];
export { defaultNavItems };