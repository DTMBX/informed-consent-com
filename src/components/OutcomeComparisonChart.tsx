import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Info } from '@phosphor-icons/react'

interface OutcomeData {
  label: string
  cesarean: number
  vbac: number
  unit: string
  description?: string
  severity?: 'low' | 'medium' | 'high'
}

interface OutcomeComparisonChartProps {
  outcomes: OutcomeData[]
  title: string
  description?: string
}

export function OutcomeComparisonChart({ outcomes, title, description }: OutcomeComparisonChartProps) {
  const getSeverityColor = (severity?: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'high':
        return 'bg-destructive'
      case 'medium':
        return 'bg-caution'
      case 'low':
        return 'bg-evidence'
      default:
        return 'bg-primary'
    }
  }

  const getBarWidth = (value: number, max: number) => {
    if (max === 0) return 0
    return Math.min((value / max) * 100, 100)
  }

  const maxValue = Math.max(...outcomes.flatMap(o => [o.cesarean, o.vbac]))

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
          <Info className="h-5 w-5 text-muted-foreground" />
        </CardTitle>
        {description && (
          <CardDescription className="text-sm leading-relaxed">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center gap-4 text-sm font-medium mb-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-accent"></div>
            <span>Cesarean</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-primary"></div>
            <span>VBAC</span>
          </div>
        </div>

        {outcomes.map((outcome, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{outcome.label}</span>
                {outcome.severity && (
                  <Badge variant="outline" className="text-xs">
                    {outcome.severity} risk
                  </Badge>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Cesarean</span>
                  <span className="font-mono">{outcome.cesarean}{outcome.unit}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getBarWidth(outcome.cesarean, maxValue)}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>VBAC</span>
                  <span className="font-mono">{outcome.vbac}{outcome.unit}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${getBarWidth(outcome.vbac, maxValue)}%` }}
                  />
                </div>
              </div>
            </div>

            {outcome.description && (
              <p className="text-xs text-muted-foreground italic pl-1">
                {outcome.description}
              </p>
            )}
          </div>
        ))}

        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground">
            <strong>Note:</strong> These are population-level statistics. Individual risk varies based on specific circumstances, prior birth history, and other health factors. Discuss your personal risk profile with your healthcare provider.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function CesareanVBACComparison() {
  const maternalOutcomes: OutcomeData[] = [
    {
      label: 'Uterine Rupture',
      cesarean: 0.03,
      vbac: 0.7,
      unit: '%',
      description: 'Risk per delivery attempt',
      severity: 'high'
    },
    {
      label: 'Maternal Infection',
      cesarean: 7.5,
      vbac: 2.5,
      unit: '%',
      description: 'Post-delivery infection rate',
      severity: 'medium'
    },
    {
      label: 'Blood Transfusion',
      cesarean: 2.5,
      vbac: 0.8,
      unit: '%',
      description: 'Need for blood transfusion',
      severity: 'medium'
    },
    {
      label: 'Hospital Stay',
      cesarean: 3.5,
      vbac: 2.0,
      unit: ' days',
      description: 'Average length of hospital stay',
      severity: 'low'
    },
    {
      label: 'Recovery Time to Normal Activity',
      cesarean: 6.5,
      vbac: 2.5,
      unit: ' weeks',
      description: 'Typical recovery period',
      severity: 'low'
    }
  ]

  const neonatalOutcomes: OutcomeData[] = [
    {
      label: 'Respiratory Distress',
      cesarean: 3.5,
      vbac: 1.2,
      unit: '%',
      description: 'Transient breathing difficulties',
      severity: 'low'
    },
    {
      label: 'NICU Admission',
      cesarean: 8.5,
      vbac: 5.2,
      unit: '%',
      description: 'Admission to neonatal intensive care',
      severity: 'medium'
    },
    {
      label: 'Birth Injury (if VBAC succeeds)',
      cesarean: 0.3,
      vbac: 0.5,
      unit: '%',
      description: 'Nerve injury, fracture, or other trauma',
      severity: 'medium'
    },
    {
      label: 'Breastfeeding Success at 6 weeks',
      cesarean: 65,
      vbac: 75,
      unit: '%',
      description: 'Mothers exclusively breastfeeding',
      severity: 'low'
    }
  ]

  const longTermOutcomes: OutcomeData[] = [
    {
      label: 'Placenta Accreta (Future Pregnancy)',
      cesarean: 0.3,
      vbac: 0.05,
      unit: '%',
      description: 'Risk increases with each cesarean (0.3% for 1st, 3% for 3rd, 7% for 4th)',
      severity: 'high'
    },
    {
      label: 'Hysterectomy (Future Pregnancy)',
      cesarean: 0.65,
      vbac: 0.1,
      unit: '%',
      description: 'Emergency hysterectomy in subsequent pregnancy',
      severity: 'high'
    },
    {
      label: 'Adhesions/Scar Tissue',
      cesarean: 60,
      vbac: 5,
      unit: '%',
      description: 'Internal scarring that may affect future surgeries',
      severity: 'medium'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-muted/50 border border-border rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-3">Understanding This Comparison</h3>
        <p className="text-sm text-foreground/90 leading-relaxed mb-3">
          This comparison shows outcomes for women choosing between:
        </p>
        <ul className="text-sm text-foreground/90 space-y-2 list-disc list-inside mb-3">
          <li><strong>Cesarean:</strong> Planned repeat cesarean delivery (no labor attempted)</li>
          <li><strong>VBAC:</strong> Trial of labor after cesarean (attempting vaginal birth). Note that 20-40% of VBAC attempts result in unplanned cesarean during labor.</li>
        </ul>
        <p className="text-sm text-foreground/90 leading-relaxed">
          Both options are reasonable and safe choices. The "best" choice depends on individual medical history, personal values, facility capabilities, and specific risk factors.
        </p>
      </div>

      <OutcomeComparisonChart
        title="Maternal Outcomes"
        description="Comparing risks and recovery for the mother"
        outcomes={maternalOutcomes}
      />

      <OutcomeComparisonChart
        title="Neonatal Outcomes"
        description="Comparing outcomes for the baby"
        outcomes={neonatalOutcomes}
      />

      <OutcomeComparisonChart
        title="Long-Term & Future Pregnancy Considerations"
        description="Potential implications for future pregnancies"
        outcomes={longTermOutcomes}
      />
    </div>
  )
}
