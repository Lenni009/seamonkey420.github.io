import { addStaticPageData, autoShow, enableTextMarking, getSelectedText, preventCopy, showAll, versionDropdown } from "../common";
import { addEventListeners } from "../commonElements/elementBackend/elementFunctions";
import { readDefaultValues } from "../modules/footer";
import { globalElements, pageData, transformedElementFunctions } from "../variables/objects";

const currentHTMLFile = window.location.pathname.split('/')!.at(-1)!.slice(0, -5);	// NoSonar we're leaving out the `.html` here
addStaticPageData('pageType', currentHTMLFile);

autoShow();
readDefaultValues();
versionDropdown();
pageData.uploadShown = true;
pageData.galleryUploadShown = true;
showAll();
if (!pageData.debug) {
	pageData.uploadShown = false;
	pageData.galleryUploadShown = false;
}
enableTextMarking();
// the order of the touch and mouse events MUST NOT BE CHANGED!!!
// it will not work the other way around. Touch must be before mouse
// globalElements.output.output.ontouchstart = () => preventCopy();		// this must be first		// this is commented out because it had bad scroll UX on mobile. It should be triggered when tapped, but not when swiped.
(globalElements.output.output as HTMLElement).onmousedown = () => preventCopy();		// this must be second
(globalElements.output.fullArticle as HTMLElement).onmouseup = (e) => getSelectedText(e.target);
(globalElements.output.fullArticle as HTMLElement).ontouchend = (e) => getSelectedText(e.target);
if (globalElements.output.albumText) {
	(globalElements.output.albumText as HTMLElement).ontouchend = (e) => getSelectedText(e.target);
	(globalElements.output.albumText as HTMLElement).onmouseup = (e) => getSelectedText(e.target);
}
addEventListeners();
addStaticPageData('eventListeners', true);