import React from 'react';
import classes from './DetailsDescription.module.css';
import github from '../assets/github.png';
import otherLinks from '../assets/otherLinks.png';
import calender from '../assets/calender.png';

const DetailsDescription = props => {
    return (
        <div className={classes.details}>
            <div className={classes.description}>
                <h5>Description</h5>
                <p>Pirate ipsum arrgh bounty warp jack. Locker rig hail-shot log jack parrel. Keelhaul swab lugsail me cat blow ensign. Spot dock pinnace quarterdeck yawl ketch cup mizzen coxswain. Tell halter chase locker boatswain pink guns piracy gaff grog. On chain fluke measured arr execution spanker driver. Keelhaul crow's weigh reef nipperkin lanyard timbers spirits keelhaul. Sloop sink dock yard pillage jennys lubber jennys salmagundi bounty.

                    Arr cog log sails to. Log cutlass killick yawl crack coast driver. Blossom spanker round boatswain pillage cutlass log or grog grog. Shot lass chantey nest hail-shot topgallant. Corsair fathom landlubber across hempen. Seas fer schooner ipsum me prey cup.
                    Furl chantey six gabion spirits boom sloop shiver brace locker. Arr brethren hearties jolly guns jolly prey blossom anchor. Gun bow arr pillage gunwalls. Me furl log ipsum blimey. Tea piracy rum o'nine cup ahoy pirate spirits. Bounty spanker guns deck cat. Nest or topsail scurvy ballast men splice spyglass topgallant coxswain. Cat belay chains spanish guns lanyard. Grog arrgh corsair pay no lateen aft chain bow. Spanish of heave topsail driver. Round nest tails tell warp aye.

                    Gaff ahoy the shrouds anchor pirate bow cat aft. Black nest pounders hearties or tales guns hail-shot pinnace brethren. Nipper crack fathom schooner fleet blimey. Quarterdeck pink gaff spanker of. Fer pirate crow's scourge boatswain the jib chain pounders blow. Spanker clipper jones' jib guns shot jib. Aye pounders sheet gabion parrel fer sails weigh. Gold ahoy shrouds scurvy clipper crack spot locker.</p>
            </div>
            <div className={classes.links}>
                <h6>Hackathon</h6>
                <h5>Oceanic Treasure Hunt</h5>
                <div className={classes.date}>
                    <img src={calender} alt="" />
                    <p>24 Feb 2023 - 24 March 2023</p>
                </div>
                <button>
                    <div className={classes.button}>
                        <img src={github} alt="" />
                        <span>GitHub Repository</span>
                    </div>
                </button>
                <button>
                    <div className={classes.button}>
                        <img src={otherLinks} alt="" />
                        <span>Other Link</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DetailsDescription;
