import { Flexbox, Icon } from '@lobehub/ui';
import { Text } from '@lobehub/ui/base-ui';
import { createStaticStyles } from 'antd-style';
import { Bot, MessageSquare, Send } from 'lucide-react';
import { memo } from 'react';

const styles = createStaticStyles(({ css, cssVar }) => ({
  card: css`
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid ${cssVar.colorBorderSecondary};
    border-radius: ${cssVar.borderRadiusLG};
    padding: 20px 24px;
  `,
  step: css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 0;
  `,
  stepIcon: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${cssVar.colorPrimaryBg};
    color: ${cssVar.colorText};
  `,
  stepNumber: css`
    color: ${cssVar.colorTextSecondary};
    font-size: 12px;
    line-height: 1;
    font-weight: 500;
  `,
  stepTitle: css`
    color: ${cssVar.colorText};
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
  `,
  connector: css`
    flex: none;
    width: 32px;
    height: 1px;
    background: ${cssVar.colorBorder};
    align-self: center;
    margin-bottom: 24px;
  `,
}));

const steps = [
  { icon: Bot, title: '选择AI大模型' },
  { icon: MessageSquare, title: '输入问题' },
  { icon: Send, title: '获取回答' },
] as const;

const QuickStartCard = memo(() => (
  <Flexbox className={styles.card} horizontal gap={0} align={'center'}>
    {steps.map((step, index) => (
      <>
        <Flexbox key={step.title} className={styles.step}>
          <Flexbox className={styles.stepIcon}>
            <Icon icon={step.icon} size={22} />
          </Flexbox>
          <Text className={styles.stepNumber}>{index + 1}</Text>
          <Text className={styles.stepTitle}>{step.title}</Text>
        </Flexbox>
        {index < steps.length - 1 && <div className={styles.connector} />}
      </>
    ))}
  </Flexbox>
));

QuickStartCard.displayName = 'QuickStartCard';

export default QuickStartCard;
