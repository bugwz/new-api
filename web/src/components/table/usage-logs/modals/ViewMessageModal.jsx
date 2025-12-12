/*
Copyright (C) 2025 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/

import React from 'react';
import { Modal, Chat, Typography } from '@douyinfe/semi-ui';

const roleInfo = {
  user: {
    name: 'User',
    avatar: '/chat_user.png',
  },
  assistant: {
    name: 'Assistant',
    avatar: '/chat_assistent.png',
  },
  system: {
    name: 'System',
    avatar: '/chat_system.png',
  }
}

const ViewMessageModal = ({
  showMessageInfo,
  setShowMessageInfoModal,
  messageInfoData,
  messageError,
  t,
}) => {
  console.log('Rendering ViewMessageModal with messageInfoData:', messageInfoData);
  return (
    <Modal
      title={t('消息详情')}
      visible={showMessageInfo}
      onCancel={() => setShowMessageInfoModal(false)}
      centered
      closable
      maskClosable
      footer={null}
      style={{ height: '90vh', width: '90vw' }}
    >
      {messageError ? (
        <div style={{ padding: 20, textAlign: 'center' }}>
          <Typography.Text type="danger">{messageError}</Typography.Text>
        </div>
      ) : (
        <div style={{ height: '80vh', overflow: 'auto' }}>
          <Chat
            chats={messageInfoData}
            roleConfig={roleInfo}
            mode="bubble"
            align="leftRight"
            renderInputArea={() => null}
            style={{
              height: '100%',
              backgroundColor: 'var(--semi-color-bg-0)'
            }}
          />
        </div>
      )}
    </Modal>
  );
};

export default ViewMessageModal;
