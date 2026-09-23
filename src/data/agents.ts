export interface Agent {
  id: string;
  name: string;
  tag: string;
  headline: string;
  oneliner: string;
  color: string;
}

export const agents: Agent[] = [
  {
    id: 'orca',
    name: 'ORCA',
    tag: 'Incident Response',
    headline: 'Root Cause Analysis in Seconds',
    oneliner: 'Detects alerts, correlates cluster topology, performs LLM root cause analysis, and delivers a PDF incident report automatically.',
    color: '#3D6FFF'
  },
  {
    id: 'karma',
    name: 'KARMA',
    tag: 'Patch Compliance',
    headline: 'CVE-to-Fleet Compliance in One Scan',
    oneliner: 'Scans every registered host for missing patches, scores by CVSS severity, and produces an executive compliance report with a risk-ordered remediation list.',
    color: '#FF4C6A'
  },
  {
    id: 'gauge',
    name: 'GAUGE',
    tag: 'Health Monitoring',
    headline: 'Predictive Resource Exhaustion Alerts',
    oneliner: 'Real-time health scan + IBM Granite TTM-powered 8h and 15-day resource forecasts across CPU, memory, and disk — before thresholds breach.',
    color: '#00D4FF'
  },
  {
    id: 'atlas',
    name: 'ATLAS',
    tag: 'Replication Health',
    headline: 'HA Replication Drift Detected Early',
    oneliner: 'Monitors HSR replication lag and sync state across all HA clusters, surfacing degraded secondaries before they become failover risks.',
    color: '#00E5A0'
  },
  {
    id: 'anchor',
    name: 'ANCHOR',
    tag: 'Alert Response',
    headline: 'Webhook-Triggered Instant Investigation',
    oneliner: 'Receives Prometheus alert webhooks and begins autonomous investigation immediately — structured report delivered in seconds via email and Teams.',
    color: '#FFB347'
  },
  {
    id: 'shield',
    name: 'SHIELD',
    tag: 'Config Drift',
    headline: 'Cluster Configuration Drift Detection',
    oneliner: 'Compares HA cluster configurations against safe-failover baselines and produces a severity-classified drift report with remediation actions.',
    color: '#3D6FFF'
  },
  {
    id: 'herald',
    name: 'HERALD',
    tag: 'Executive Reporting',
    headline: 'Automated Executive Health Digests',
    oneliner: 'Aggregates health, compliance, CVE exposure, and SLA metrics into a management-level digest delivered on your schedule — no manual assembly.',
    color: '#00D4FF'
  },
  {
    id: 'chronicle',
    name: 'CHRONICLE',
    tag: 'Incident Timeline',
    headline: 'Post-Incident Forensics Automated',
    oneliner: 'Correlates metric spikes, cluster events, and audit records into a precise incident timeline for RCA documentation and audit submissions.',
    color: '#FF4C6A'
  },
  {
    id: 'klp',
    name: 'KLP Agent',
    tag: 'Kernel Patching',
    headline: 'Zero-Downtime Kernel Live Patching',
    oneliner: 'Discovers and applies kernel live patches without reboots, with HITL approval gating and post-patch health validation.',
    color: '#00E5A0'
  },
  {
    id: 'sage',
    name: 'SAGE',
    tag: 'Inventory Audit',
    headline: 'Shadow Systems and Licence Hygiene',
    oneliner: 'Identifies unregistered hosts, orphaned group memberships, and oversubscribed activation keys — with corrective proposals via HITL workflow.',
    color: '#FFB347'
  },
  {
    id: 'cve',
    name: 'CVE Responder',
    tag: 'CVE Response',
    headline: 'Topology-Aware CVE Patch Scheduling',
    oneliner: 'Sequences patch application across the fleet respecting HA topology — secondaries before primaries — to prevent split-brain during patching.',
    color: '#FF4C6A'
  },
  {
    id: 'network',
    name: 'NETWORK',
    tag: 'Connectivity',
    headline: 'SAP Network Path Health Monitoring',
    oneliner: 'ICMP and TCP reachability checks across all HSR network paths, bonding interfaces, and inter-node latency — alerting before cluster failover.',
    color: '#00D4FF'
  },
  {
    id: 'reboot',
    name: 'Reboot Coordinator',
    tag: 'Safe Reboots',
    headline: 'HA-Safe Reboot Scheduling',
    oneliner: 'Evaluates cluster state before scheduling any reboot — pausing if the cluster cannot safely absorb the restart.',
    color: '#3D6FFF'
  },
  {
    id: 'rollback',
    name: 'Security Rollback',
    tag: 'Post-Patch Safety',
    headline: 'Post-Patch Degradation Detection',
    oneliner: 'Monitors system health after patching and initiates rollback assessment with HITL approval before any reversion executes.',
    color: '#00E5A0'
  },
  {
    id: 'ha-readiness',
    name: 'SAP HA Readiness',
    tag: 'Pre-Maintenance',
    headline: 'Failover Readiness Score Per Cluster',
    oneliner: 'Evaluates cluster readiness before maintenance windows — go/no-go assessment with per-criterion pass/warn/fail scoring.',
    color: '#FFB347'
  },
  {
    id: 'decommission',
    name: 'Decommission Agent',
    tag: 'Lifecycle',
    headline: 'Safe Infrastructure Offboarding',
    oneliner: 'Confirms cluster non-membership before removing system profiles, cancelling actions, and generating a decommission audit record.',
    color: '#6B7A99'
  },
  {
    id: 'onboarding',
    name: 'Onboarding Agent',
    tag: 'Lifecycle',
    headline: 'Automated Host Registration',
    oneliner: 'SSH-bootstrap registration into SUSE Manager with HITL approval, Teams/email confirmation, and onboarding audit log.',
    color: '#00E5A0'
  },
  {
    id: 'fleet-grouper',
    name: 'FLEET GROUPER',
    tag: 'Fleet Management',
    headline: 'Dynamic Group Reorganisation',
    oneliner: 'Auto-classifies systems into Compliant / NonCompliant / Pending-Reboot / Needs-Patching groups with HITL-gated changes.',
    color: '#3D6FFF'
  }
];
