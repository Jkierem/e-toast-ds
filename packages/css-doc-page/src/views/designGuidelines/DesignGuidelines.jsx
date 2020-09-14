import React from 'react';
import styles from './DesignGuidelines.module.scss';
import pencil from '../../assets/img/pencilthin.svg'
import ActionCard from '../../components/actionCard/ActionCard';
import tokens from '../../assets/img/tokens.svg'
import typography from '../../assets/img/typography.svg'
import shapes from '../../assets/img/shapes.svg'
import icons from '../../assets/img/icons.svg'
import color from '../../assets/img/color.svg'
import accessibility from '../../assets/img/accessibility.svg'

function DesignGuidelines() {
    return (
        <>
            <section className={styles.TopSection}>
                <h1>Design Guidelines</h1>
                <p>
                    The Design Guidelines are here to lead users on how to
                    apply design principles to ensure the best User Experience.
                </p>
            </section>
            <div className={styles.Circle}>
                <img src={pencil} alt="pencil" />
            </div>
            <section className={styles.BottomSection}>
                <h2>
                    Design Principles
                </h2>
                <div className={styles.BottomSection_cards}>
                    {/* This div has flex-direction: column; */}
                    <ActionCard
                        height='377px'
                        actionImage={tokens}
                        imageOffset="CenterOffset"
                        actionHeading="TOKENS"
                        actionPhrase="Design tokens are central and tiny pieces of UI information."
                        actionButtonText="READ MORE"
                        buttonRedirectUrl="/TokenPrinciples"
                    />
                    <ActionCard
                        height='377px'
                        actionImage={typography}
                        imageOffset="CenterOffset"
                        actionHeading="TYPOGRAPHY"
                        actionPhrase="Design tokens are central and tiny pieces of UI information."
                        actionButtonText="READ MORE"
                        buttonRedirectUrl="/TypographyGuidelines"
                    />
                    <ActionCard
                        height='377px'
                        actionImage={shapes}
                        imageOffset="CenterOffset"
                        actionHeading="SHAPES"
                        actionPhrase="Shapes direct attention, identify components, communicate state, and express brand."
                        actionButtonText="READ MORE"
                        buttonRedirectUrl="/ShapeGuidelines"
                    />
                    <ActionCard
                        height='377px'
                        actionImage={icons}
                        imageOffset="CenterOffset"
                        actionHeading="ICONS"
                        actionPhrase="Design tokens are central and tiny pieces of UI information."
                        actionButtonText="READ MORE"
                    />
                    <ActionCard
                        height='377px'
                        actionImage={color}
                        imageOffset="CenterOffset"
                        actionHeading="COLOR"
                        actionPhrase="Design tokens are central and tiny pieces of UI information."
                        actionButtonText="READ MORE"
                        buttonRedirectUrl="/ColorGuidelines"
                    />
                    <ActionCard
                        height='377px'
                        actionImage={accessibility}
                        imageOffset="CenterOffset"
                        actionHeading="ACCESSIBILITY"
                        actionPhrase="Design tokens are central and tiny pieces of UI information."
                        actionButtonText="READ MORE"
                    />
                </div>
            </section>
        </>
    );
}

export default DesignGuidelines;