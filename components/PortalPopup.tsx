import React, { useEffect, useRef, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  LayoutRectangle,
} from 'react-native';

type Placement =
  | 'Centered'
  | 'Top left'
  | 'Top center'
  | 'Top right'
  | 'Bottom left'
  | 'Bottom center'
  | 'Bottom right';

type PopupProps = {
  overlayColor?: string;
  placement?: Placement;
  onOutsideClick?: () => void;
  zIndex?: number;
  children: React.ReactNode;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
};

const PortalPopup: React.FC<PopupProps> = ({
  children,
  overlayColor = 'rgba(0,0,0,0.3)',
  placement = 'Centered',
  onOutsideClick,
  zIndex = 100,
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
}) => {
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState<Partial<LayoutRectangle>>({});

  const window = Dimensions.get('window');

  useEffect(() => {
    const pos: any = {};
    switch (placement) {
      case 'Top left':
        pos.top = top;
        pos.left = left;
        break;
      case 'Top center':
        pos.top = top;
        pos.left = window.width / 2;
        break;
      case 'Top right':
        pos.top = top;
        pos.right = right;
        break;
      case 'Bottom left':
        pos.bottom = bottom;
        pos.left = left;
        break;
      case 'Bottom center':
        pos.bottom = bottom;
        pos.left = window.width / 2;
        break;
      case 'Bottom right':
        pos.bottom = bottom;
        pos.right = right;
        break;
      case 'Centered':
      default:
        pos.top = window.height / 2;
        pos.left = window.width / 2;
        break;
    }
    setPosition(pos);
  }, [placement, top, bottom, left, right]);

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onOutsideClick}>
        <View style={[styles.overlay, { backgroundColor: overlayColor, zIndex }]}>
          <View
            style={[
              styles.popupContent,
              position,
              placement.includes('center') && styles.centered,
            ]}
          >
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PortalPopup;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupContent: {
    position: 'absolute',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  centered: {
    transform: [{ translateX: -150 }, { translateY: -100 }],
  },
});
