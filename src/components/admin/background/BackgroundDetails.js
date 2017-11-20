import React from 'react';
import PropTypes from 'prop-types';
import util from '../../../util/util';
import DndProficiencyGroupDisplay from '../../common/display/DndProficiencyGroupDisplay';
import DndDieChartDisplay from '../../common/display/DndDieChartDisplay';

class BackgroundDetails extends React.Component {
    constructor(props) {
        super(props);
        this.renderEquipmentInfo = this.renderEquipmentInfo.bind(this);
        this.renderFeatureInfo = this.renderFeatureInfo.bind(this);
        this.renderVariantInfo = this.renderVariantInfo.bind(this);
    }
    
    componentDidMount() {
        
    }
    
    renderEquipmentInfo(background) {
        return (
            <div>
                <div>
                    <div>Equipment:</div>
                    <div>
                        {util.format.forDisplay.obj.equipmentList(background)}
                    </div>
                </div>
            </div>
        );
    }
    
    renderFeatureInfo(feature, isVariant) {
        let heading = 'Feature';
        if (isVariant) {
            heading = 'Feature Variant';
        }
        return (
            <div>
                <div>{heading}: {feature.name}</div>
                <div>{feature.description}</div>
            </div>
        );
    }
    
    renderVariantInfo(background) {
        if (!background.variants || (background.variants && background.variants.length == 0)) {
            return null;
        } else {
            let variantDisplay = null;
            variantDisplay = background.variants.map(variant =>
                <div key={variant.id}>
                    <div>Variant: {variant.name}</div>
                    {this.renderFeatureInfo(variant.feature, true)}
                </div>
            );
            return (<div>{variantDisplay}</div>);
        }
    }
    
    render() {
        const background = this.props.background;
        return (
            <div>
                <div>{background.name}</div>
                <div>{background.description}</div>
                <DndProficiencyGroupDisplay
                    proficiencyGroups={background.proficiencyGroups}
                    />
                {this.renderEquipmentInfo(background)}
                {this.renderFeatureInfo(background.feature)}
                {this.renderVariantInfo(background)}
                {
                    background.charts.map(chart =>
                                          <DndDieChartDisplay
                                              key={chart.id}
                                              chart={chart}
                                              />
)
                }
            </div>
        );
    }
}

BackgroundDetails.propTypes = {
    background: PropTypes.object.isRequired,
    picklists: PropTypes.array
};

export default BackgroundDetails;