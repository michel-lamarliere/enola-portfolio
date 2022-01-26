import classes from './MobileNavigation.module.scss';
import Links from './Links';
import { LogoBtn, HamburgerBtn, LanguageBtn } from '../../UI/HeaderButtons';
import Overlay from '../../UI/Overlay';
import { useOpenned, useOpennedUpdate } from '../../../store/modal-context';

function MobileNavigation() {
	const openned = useOpenned();
	const toggleOpenned = useOpennedUpdate();

	function NoScroll() {
		if (openned) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
		return null;
	}

	return (
		<div className={classes.mobilenav}>
			<div className={classes.mobile}>
				<LogoBtn />
				<HamburgerBtn onClick={toggleOpenned} />
			</div>
			<NoScroll />
			{openned && <Overlay />}
			{openned && (
				<Links
					onClick={toggleOpenned}
					languageLink={<LanguageBtn onClick={toggleOpenned} />}
				/>
			)}
		</div>
	);
}

export default MobileNavigation;
