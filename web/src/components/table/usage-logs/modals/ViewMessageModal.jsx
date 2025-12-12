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
          <style>
            {`
              /* 基础样式优化 */
              .semi-chat-chatBox-content-user {
                background-color: var(--semi-color-fill-1) !important;
                color: var(--semi-color-text-1) !important;
              }

              .semi-chat-chatBox-content-user .semi-typography,
              .semi-chat-chatBox-content-user .semi-typography code {
                color: var(--semi-color-text-0) !important;
              }
          
              /* 代码块样式优化 */
              .semi-chat-chatBox-content pre {
                margin: 12px 0;
              }

              /* 标题样式优化 */
              h1.semi-typography, .semi-typography-h1.semi-typography {
                font-size: 1.8em;
                margin: 1.2em 0 0.6em;
                font-weight: 700;
                border-bottom: 2px solid var(--semi-color-border);
                padding-bottom: 0.3em;
              }

              h2.semi-typography, .semi-typography-h2.semi-typography {
                font-size: 1.5em;
                margin: 1em 0 0.5em;
                font-weight: 600;
                border-bottom: 1px solid var(--semi-color-border);
                padding-bottom: 0.2em;
              }

              h3.semi-typography, .semi-typography-h3.semi-typography {
                font-size: 1.3em;
                margin: 0.8em 0 0.4em;
                font-weight: 600;
              }

              /* 列表样式优化 */
              .semi-chat-chatBox-content ul,
              .semi-chat-chatBox-content ol {
                margin: 0.8em 0;
                padding-left: 1.5em;
              }

              .semi-chat-chatBox-content li {
                margin: 0.3em 0;
              }

              /* 引用块样式优化 */
              .semi-chat-chatBox-content blockquote {
                margin: 1em 0;
                padding: 0.5em 1em;
                border-left: 4px solid var(--semi-color-primary);
                background-color: var(--semi-color-fill-0);
                color: var(--semi-color-text-1);
                font-style: italic;
              }

              /* 表格样式优化 */
              .semi-chat-chatBox-content table {
                width: 100%;
                margin: 1em 0;
                border-collapse: collapse;
                border: 1px solid var(--semi-color-border);
              }

              .semi-chat-chatBox-content th,
              .semi-chat-chatBox-content td {
                padding: 8px 12px;
                border: 1px solid var(--semi-color-border);
              }

              .semi-chat-chatBox-content th {
                background-color: var(--semi-color-fill-1);
                font-weight: 600;
              }

              /* 链接样式优化 */
              .semi-chat-chatBox-content a {
                color: var(--semi-color-primary);
                text-decoration: none;
              }

              .semi-chat-chatBox-content a:hover {
                text-decoration: underline;
              }

              /* 段落间距优化 */
              .semi-chat-chatBox-content p {
                margin: 0.8em 0;
                line-height: 1.6;
              }

              /* 水平线样式优化 */
              .semi-chat-chatBox-content hr {
                margin: 1.5em 0;
                border: none;
                border-top: 1px solid var(--semi-color-border);
              }
            `}
          </style>
          <Chat
            chats={messageInfoData}
            roleConfig={roleInfo}
            mode="bubble"
            align="leftRight"
            renderInputArea={() => null}
            chatBoxRenderConfig={{
              renderChatBoxTitle: () => null
            }}
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