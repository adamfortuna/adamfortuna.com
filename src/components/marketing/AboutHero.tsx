/* eslint-disable react/no-danger */
import { useState } from 'react'
import { faChevronRight, faChevronDown } from '@fortawesome/pro-regular-svg-icons'
import {
  IconDefinition,
  faAt,
  faUserBountyHunter,
  faPartyHorn,
  faHeadSideBrain,
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { Link } from '@/components/layout/Link'
import { Image } from '@/components/layout/Image'
import { Container } from '@/components/layout/Container'

export const imagePlaceholders = [
  'adam_megacon_432c592c3d.jpg',
  'parks_8abfcf53e3.jpg',
  'barcamp_45da62a4ee.jpg',
  'bryce_2e7bdf83b0.jpg',
]

interface Question {
  question: string
  Component: any
  icon: IconDefinition
}

interface QuestionButtonType {
  question: Question
  active: boolean
  setActiveQuestion: any
}
const QuestionButton = ({ question, active, setActiveQuestion }: QuestionButtonType) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => setActiveQuestion(question)}
        className={clsx(
          'group flex items-center justify-between w-full px-4 py-2 rounded',
          active ? 'bg-green-300' : 'hover:bg-green-200',
        )}
      >
        <div className="flex space-x-2 items-center">
          <FontAwesomeIcon icon={question.icon} className="text-green-800 text-2xl" />
          <span dangerouslySetInnerHTML={{ __html: question.question }} />
        </div>

        <FontAwesomeIcon
          icon={faChevronRight}
          className={clsx(
            'hidden md:inline-block text-green-600',
            active ? 'inline-block' : 'hidden md:group-hover:inline-block',
          )}
        />
        <FontAwesomeIcon
          icon={faChevronDown}
          className={clsx(
            'md:hidden-block text-green-600',
            active ? 'inline-block md:hidden' : 'hidden group-hover:inline-block md:group-hover:hidden',
          )}
        />
      </button>
    </div>
  )
}

const WhoQuestionComponent = () => {
  return (
    <div className="h-[600px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        className="shadow-2xl rounded rounded-bl-none"
        src="adam_megacon_432c592c3d.jpg"
      />
      <motion.div
        layoutId="question"
        className="bg-white absolute w-full md:w-[400px] my-8 mx-4 backdrop-blur-sm bg-white/90 p-4 rounded prose prose-lg prose-h3:m-0 "
      >
        <h3>Who are you?</h3>
        <p>
          I grew up online in the '90s posting on DDR bulletin boards, playing Magic: The Gathering and downloading
          anime off IRC.
        </p>

        <p>
          More recently I worked at
          <Link href="/projects/codeschool">Code School</Link>
          (acq'd for $36m) and
          <Link href="/projects/pluralsight">Pluralsight</Link>
          (IPO'd) in roles ranging from full-stack developer to Product Director and everything in between.
        </p>

        <p>I'm currently taking a break from work to learn &amp; build things I've always wanted.</p>
        <p className="text-right">
          <Link href="/about">Do you want to know more? ›</Link>
        </p>
      </motion.div>
    </div>
  )
}

const FunQuestionComponent = () => {
  return (
    <div className="h-[600px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        className="shadow-2xl rounded rounded-bl-none"
        src="parks_8abfcf53e3.jpg"
      />
      <motion.div
        layoutId="question"
        className="bg-white absolute w-full md:w-[400px] my-8 mx-4 backdrop-blur-sm bg-white/90 p-4 rounded prose prose-lg prose-h3:m-0 "
      >
        <h3>What do you do for fun?</h3>
        <p>
          I enjoy just about anything science fiction or fantasy (books, tv, movies, etc). My favorite book of all time
          is{' '}
          <Link href="https://hardcover.app/books/hyperion" target="_blank">
            Hyperion
          </Link>{' '}
          by Dan Simmons.
        </p>
        <p>
          My wife and I moved from Orlando, FL to Utah 5 years ago and it's been amazing. We're casual ultralight
          backpackers and love getting out of the city. I'm taking a break this year to recover from an ACL tear.
        </p>
        <p>I'll play any board game, but have a soft spot for Settlers of Catan.</p>
      </motion.div>
    </div>
  )
}

const SkillsQuestionComponent = () => {
  return (
    <div className="h-[600px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        className="shadow-2xl rounded rounded-bl-none"
        src="barcamp_45da62a4ee.jpg"
      />
      <motion.div
        layoutId="question"
        className="bg-white absolute right-0 w-full md:w-[400px] my-8 mx-4 backdrop-blur-sm bg-white/90 p-4 rounded prose prose-lg prose-h3:m-0 "
      >
        <h3>What are your skills?</h3>
        <p>
          I love working on projects from idea to release. Sometimes that means doing product research and talking to
          customers - other times it means just building it.
        </p>
        <p>
          The tools I reach for the most are
          <Link href="/technologies/ruby-on-rails" className="text-bold ml-1">
            Ruby on Rails
          </Link>
          ,
          <Link href="/technologies/next-js" className="text-bold ml-1">
            Next.js
          </Link>
          ,
          <Link href="/technologies/tailwind-css" className="text-bold ml-1">
            Tailwind.css
          </Link>{' '}
          and
          <Link href="/technologies/graphql" className="text-bold ml-1">
            GraphQL
          </Link>
          .
        </p>
        <p>
          I'm currently having a lot of fun learning web animations with
          <Link href="/technologies/greensock" className="text-bold ml-1">
            GreenSock
          </Link>
          .
        </p>
      </motion.div>
    </div>
  )
}

const AskQuestionComponent = () => {
  return (
    <div className="h-[600px] relative">
      <Image
        layout="fill"
        objectFit="cover"
        className="shadow-2xl rounded rounded-bl-none"
        src="bryce_2e7bdf83b0.jpg"
      />
      <motion.div
        layoutId="question"
        className="bg-white absolute right-0 w-full md:w-[400px] my-8 mx-4 backdrop-blur-sm bg-white/90 p-4 rounded prose prose-lg prose-h3:m-0 "
      >
        <h3>Ask me anything!</h3>
        <p>Send me an email: contact@adamfortuna.com</p>
      </motion.div>
    </div>
  )
}

const questions = [
  {
    question: '<b>Who</b> are you?',
    Component: WhoQuestionComponent,
    icon: faUserBountyHunter,
  },
  {
    question: 'What are your <b>skills</b>?',
    Component: SkillsQuestionComponent,
    icon: faHeadSideBrain,
  },
  {
    question: 'What do you do for <b>fun</b>?',
    Component: FunQuestionComponent,
    icon: faPartyHorn,
  },
  {
    question: 'Ask me anything',
    Component: AskQuestionComponent,
    icon: faAt,
  },
] as Question[]

export const AboutHero = () => {
  const [activeQuestion, setActiveQuestion] = useState(questions[0])
  return (
    <div>
      <div className="h-screen flex items-center bg-">
        <Container className="w-full">
          <div className="flex relative mx-auto flex-col md:flex-row">
            <div className="bg-green-50 p-4 shadow-lg rounded-lg mt-12 w-full md:w-[500px] md:rounded-r-none">
              <h2 className="font-bold text-3xl text-green-800">Let's Chat!</h2>
              <div className="space-y-4 mt-6">
                {questions.map((question) => (
                  <div key={question.question}>
                    <QuestionButton
                      question={question}
                      active={question.question === activeQuestion.question}
                      setActiveQuestion={setActiveQuestion}
                    />
                    {question.question === activeQuestion.question && (
                      <div className="md:hidden shadow rounded-t-none rounded-lg rounded-bl-none w-full flex-grow relative">
                        <activeQuestion.Component />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block shadow-lg rounded-lg rounded-bl-none w-full flex-grow relative overflow-hidden">
              <activeQuestion.Component />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
