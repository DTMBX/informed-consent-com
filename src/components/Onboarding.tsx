import { Stage } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Info } from '@phosphor-icons/react'
import { useState } from 'react'
import { stageConfig, DISCLAIMER_TEXT } from '@/lib/constants'

interface OnboardingProps {
  onComplete: (stage: Stage) => void
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<'welcome' | 'disclaimer' | 'stage'>('welcome')
  const [selectedStage, setSelectedStage] = useState<Stage>('postpartum')

  if (step === 'welcome') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-primary">
            Respectful Maternity & Newborn Care
          </h1>
          <p className="text-lg text-muted-foreground">
            Evidence-based, non-coercive education for confident, informed maternal and newborn care decisions
          </p>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Welcome</h2>
          <div className="space-y-4 text-foreground mb-8">
            <p>
              This platform helps you understand the benefits, risks, uncertainties, and alternatives 
              for maternal and newborn care decisions including birth practices, delivery options, 
              labor support, immunizations, and postpartum therapies.
            </p>
            <p>
              Our mission is to promote <strong>respectful, informed consent</strong> through balanced disclosure and to support your <strong>voluntary decision-making</strong> by providing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Balanced information with comprehensive citations from major pediatric, obstetric, and public health bodies</li>
              <li>Absolute risk numbers and frequency data when available</li>
              <li>Clear distinction between evidence-based recommendations and personal preferences</li>
              <li>Transparent presentation of benefits, risks, alternatives, and uncertainties</li>
              <li>Time to reflect without coercion or fear-based messaging</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-6">
              This is an educational tool, not medical advice. Always consult with your healthcare 
              providers about your specific situation.
            </p>
          </div>

          <Button onClick={() => setStep('disclaimer')} size="lg" className="w-full">
            Continue
          </Button>
        </Card>
      </div>
    )
  }

  if (step === 'disclaimer') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        <Card className="p-8">
          <Alert className="mb-6">
            <Info className="h-5 w-5" />
            <AlertDescription className="ml-2">
              {DISCLAIMER_TEXT}
            </AlertDescription>
          </Alert>

          <h2 className="text-2xl font-semibold mb-6">Important Information</h2>
          
          <div className="space-y-4 text-foreground mb-8">
            <div>
              <h3 className="font-semibold mb-2">This tool DOES:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide evidence-based educational content</li>
                <li>Cite reputable medical sources</li>
                <li>Present benefits, risks, and alternatives</li>
                <li>Support informed decision-making</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">This tool DOES NOT:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Replace consultation with healthcare providers</li>
                <li>Provide medical advice or diagnosis</li>
                <li>Make recommendations for your specific situation</li>
                <li>Discourage evidence-based care</li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Every person's medical situation is unique. The information here is general education. 
              Always discuss your individual circumstances with qualified healthcare professionals.
            </p>
          </div>

          <div className="flex gap-4">
            <Button variant="outline" onClick={() => setStep('welcome')}>
              Back
            </Button>
            <Button onClick={() => setStep('stage')} className="flex-1">
              I Understand
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
      <Card className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Where are you in your journey?</h2>
        <p className="text-muted-foreground mb-8">
          This helps us show you the most relevant procedures and information.
        </p>

        <div className="space-y-4 mb-8">
          {(['prenatal', 'labor', 'postpartum'] as const).map((stage) => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`w-full p-6 text-left border-2 rounded-lg transition-all ${
                selectedStage === stage
                  ? 'border-primary bg-primary/5'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              <div className="font-semibold text-lg mb-1 ui-text">
                {stageConfig[stage].label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stageConfig[stage].description}
              </div>
            </button>
          ))}
        </div>

        <div className="flex gap-4">
          <Button variant="outline" onClick={() => setStep('disclaimer')}>
            Back
          </Button>
          <Button onClick={() => onComplete(selectedStage)} className="flex-1">
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  )
}
