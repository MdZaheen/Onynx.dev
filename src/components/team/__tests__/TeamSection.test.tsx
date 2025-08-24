import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import TeamSection from '../TeamSection'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Mock the team data
jest.mock('@/data/team', () => ({
  team: {
    member1: {
      id: 'member1',
      name: 'Test Member 1',
      title: 'Test Title 1',
      role: 'Test Role 1',
      bio: 'Test bio 1',
      fullBio: 'Test full bio 1',
      avatar: '/test-avatar-1.jpg',
      skills: ['React', 'TypeScript'],
      funFacts: ['Test fact 1'],
      stats: [{ label: 'Projects', value: '5', emoji: '🚀' }],
      socials: [
        {
          label: 'GitHub',
          href: 'https://github.com/test',
          icon: () => <span>GitHub</span>,
          color: '#333'
        }
      ]
    },
    member2: {
      id: 'member2',
      name: 'Test Member 2',
      title: 'Test Title 2',
      role: 'Test Role 2',
      bio: 'Test bio 2',
      fullBio: 'Test full bio 2',
      avatar: '/test-avatar-2.jpg',
      skills: ['Node.js', 'Python'],
      funFacts: ['Test fact 2'],
      stats: [{ label: 'APIs', value: '10', emoji: '🔌' }],
      socials: [
        {
          label: 'LinkedIn',
          href: 'https://linkedin.com/in/test',
          icon: () => <span>LinkedIn</span>,
          color: '#0077B5'
        }
      ]
    }
  }
}))

describe('TeamSection', () => {
  it('renders team members correctly', () => {
    render(<TeamSection />)
    
    expect(screen.getByText('MEET THE TEAM')).toBeInTheDocument()
    expect(screen.getByText('Test Member 1')).toBeInTheDocument()
    expect(screen.getByText('Test Member 2')).toBeInTheDocument()
  })

  it('expands only one member at a time', async () => {
    render(<TeamSection />)
    
    // Initially no member should be expanded
    expect(screen.queryByText('Test full bio 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Test full bio 2')).not.toBeInTheDocument()
    
    // Click first member
    const member1Card = screen.getByText('Test Member 1').closest('div[role="button"], button, [onClick]')
    if (member1Card) {
      fireEvent.click(member1Card)
    }
    
    // First member should be expanded
    expect(screen.getByText('Test full bio 1')).toBeInTheDocument()
    expect(screen.queryByText('Test full bio 2')).not.toBeInTheDocument()
    
    // Click second member
    const member2Card = screen.getByText('Test Member 2').closest('div[role="button"], button, [onClick]')
    if (member2Card) {
      fireEvent.click(member2Card)
    }
    
    // Only second member should be expanded
    expect(screen.queryByText('Test full bio 1')).not.toBeInTheDocument()
    expect(screen.getByText('Test full bio 2')).toBeInTheDocument()
  })

  it('shows collapse button when a member is expanded', () => {
    render(<TeamSection />)
    
    // Initially no collapse button
    expect(screen.queryByText('Collapse')).not.toBeInTheDocument()
    
    // Click first member
    const member1Card = screen.getByText('Test Member 1').closest('div[role="button"], button, [onClick]')
    if (member1Card) {
      fireEvent.click(member1Card)
    }
    
    // Collapse button should appear
    expect(screen.getByText('Collapse')).toBeInTheDocument()
    
    // Click collapse button
    fireEvent.click(screen.getByText('Collapse'))
    
    // Member should be collapsed and collapse button should disappear
    expect(screen.queryByText('Test full bio 1')).not.toBeInTheDocument()
    expect(screen.queryByText('Collapse')).not.toBeInTheDocument()
  })
})
