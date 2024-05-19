import BoxComponent from '../base/BoxComponent';
import LinearLoader from '../base/Loaders/LinearLoader';
import PortalComponent from '../base/PortalComponent';
import StackComponent from '../base/StackComponent';

const Loader = () => {
    return (
        <BoxComponent component="main">
            <PortalComponent>
                <StackComponent flexDirection="column" alignItems="center" justifyContent="center" sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10000,
                }}>
                    <StackComponent
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <BoxComponent sx={{ width: '180px', mt: '30px' }}>
                            <LinearLoader />
                        </BoxComponent>
                    </StackComponent>
                </StackComponent>
            </PortalComponent>
        </BoxComponent>
    );
};

export default Loader;
