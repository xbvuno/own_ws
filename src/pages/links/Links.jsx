import "./Links.css";

function ContactCard({link, logoSrc, children}) {
    return ( <a href={link}><article><h3>{children}</h3><img src={logoSrc} /></article></a> );
}

export default function Links() {
	return (
		<>
			<main id='links'>
                <h2>Find me here too:</h2>
				<div>
					<ContactCard
						link='https://www.instagram.com/profilodibruno'
						logoSrc='public/logos/instagram.svg'
					>
						profilodibruno
					</ContactCard>
					{/* <ContactCard
						link='mailto:x-bvuno@gmail.com'
						logoSrc='logos/gmail.svg'
					>
						x-bvuno@gmail.com
					</ContactCard> */}
                    <ContactCard logoSrc='public/logos/telegram.svg' link='https://t.me/bvuno'>
                        bvuno
					</ContactCard>
                    <ContactCard logoSrc='public/logos/spotify.svg' link='https://open.spotify.com/user/darkjackfire'>
                        darkjackfire
					</ContactCard>
				</div>
                <div>
                    <ContactCard logoSrc='public/logos/newgrounds.svg' link='https://xbvuno.newgrounds.com/'>
                        xbvuno
					</ContactCard>
                    <ContactCard logoSrc='public/logos/discord.svg'>
                        bvuno.
					</ContactCard>
                </div>
			</main>
		</>
	);
}
