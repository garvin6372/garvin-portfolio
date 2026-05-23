export function HeroPet() {
    return (
        <div className="hero-pet" aria-hidden="true">
            <div className="pet-orbit">
                <div className="pet-body">
                    <div className="pet-jetpack pet-jetpack-left">
                        <span />
                        <span />
                    </div>
                    <div className="pet-jetpack pet-jetpack-right">
                        <span />
                        <span />
                    </div>
                    <div className="pet-ear pet-ear-left" />
                    <div className="pet-ear pet-ear-right" />
                    <div className="pet-face">
                        <span className="pet-eye" />
                        <span className="pet-eye" />
                    </div>
                    <div className="pet-mouth" />
                    <div className="pet-terminal">~/ai</div>
                </div>
                <div className="pet-shadow" />
            </div>
        </div>
    );
}
